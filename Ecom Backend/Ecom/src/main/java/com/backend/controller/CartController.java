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
import org.springframework.web.bind.annotation.RestController;

import com.backend.Entity.Cart;
import com.backend.Entity.user;
import com.backend.repository.CartRepo;

@RestController
@CrossOrigin("*")
public class CartController {
	
@Autowired
 private CartRepo Cart;

@PostMapping("/cart")
List<Cart> cart( @RequestBody user User){
	
	return Cart.findByUsr(User);
	
}


@GetMapping("/deletcart/{id}")
ResponseEntity<String>adduser(@PathVariable Long id){
	
 Cart.deleteById(id);
return new ResponseEntity<>("deleted",HttpStatus.OK);
	
}


@PostMapping("/addcart")
ResponseEntity<String>adduser(@RequestBody Cart crt){
	    
 Cart.save(crt);
return new ResponseEntity<>("recived",HttpStatus.OK);
	
}

}
