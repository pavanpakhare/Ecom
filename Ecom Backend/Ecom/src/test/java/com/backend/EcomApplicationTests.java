package com.backend;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.backend.Entity.Cart;
import com.backend.Entity.Product;
import com.backend.Entity.user;
import com.backend.repository.CartRepo;
import com.backend.repository.ProductRepo;
import com.backend.repository.UserRepo;

@SpringBootTest
class EcomApplicationTests {

	@Autowired
	private ProductRepo pr;
	@Autowired
	private UserRepo ur;
	
	@Autowired
	private CartRepo cr;
	
	@Test
	void contextLoads() {
		
	}
	@Test
	void test1() {
		
	var cart=new Cart();

	
	}

}
