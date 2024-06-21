package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.Entity.Ord;
import com.backend.Entity.user;
import com.backend.repository.OrderRepo;

@CrossOrigin("*")
@RestController
public class Ordercontroller {

	@Autowired
	private OrderRepo order;
	
	@GetMapping("/orders")
	List<Ord> allOrder(){
		
		return order.findAll();
	 
	}
	
	@GetMapping("deletorder/{id}")
	String deletorder(@PathVariable long id) {
		order.deleteById(id);
		return "deletd";
	}
	

	
	@PostMapping("/place")
	ResponseEntity<String> placeorder(@RequestBody Ord p){
		 
		
		order.save(p);
		return new ResponseEntity<>("receved",HttpStatus.OK);
	}
	

	
}
