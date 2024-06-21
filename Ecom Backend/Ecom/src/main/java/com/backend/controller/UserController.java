package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.HeadersBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.Entity.user;
import com.backend.repository.UserRepo;

@RestController
@CrossOrigin
public class UserController {

@Autowired
private UserRepo userrepo;

@GetMapping("/user/{uname}")
 List<user> User(@PathVariable String uname ) {

	 return  userrepo.findByUsername(uname);
 }

@GetMapping("/all")
List<user> alluser(){

	return userrepo.findAll();
}

@GetMapping("/usr/{usr}/{pass}")
user us(@PathVariable String usr,@PathVariable String pass){
	return userrepo.findByUsernameAndPassword(usr, pass);
}

@PostMapping("/adduser")
ResponseEntity<String>adduser(@RequestBody user User){
	    
 userrepo.save(User);
return new ResponseEntity<>("recived",HttpStatus.OK);
	
}

	
}
