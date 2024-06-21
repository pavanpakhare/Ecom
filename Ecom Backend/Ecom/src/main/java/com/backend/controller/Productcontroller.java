package com.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.Entity.Product;
import com.backend.repository.ProductRepo;

@RestController
@CrossOrigin("*")
public class Productcontroller {
	
@Autowired
 private ProductRepo pro;


@GetMapping("/products")
 List<Product> allproduct(){
	return pro.findAll();
 }
 
 @GetMapping("/products/watch")
 List<Product> watch(){
	return pro.findByCat("watch");
 }
 
 @GetMapping("/products/mobile")
 List<Product> mobile(){
	return pro.findByCat("mobile");
 }
 
 @GetMapping("/products/electronics")
 List<Product> elctric(){
	return pro.findByCat("electronics");
 }
 
 @GetMapping("/product/{id}")
 Optional<Product> product(@PathVariable long id){
	return pro.findById(id);
 }
 
 @GetMapping("/del/{id}")
 Optional<Product> delp(@PathVariable long id){
	 pro.deleteById(id);
	 return pro.findById(id);
 }
 
 

 @PostMapping("/addproduct")
 ResponseEntity<String>addproduct(@RequestBody Product prod){
	 
	 pro.save(prod);
	 return new ResponseEntity<>("recved product",HttpStatus.OK);
 }
	
	

}
