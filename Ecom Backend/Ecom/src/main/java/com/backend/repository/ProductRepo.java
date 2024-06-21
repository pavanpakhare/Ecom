package com.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.Entity.Product;


public interface ProductRepo extends JpaRepository<Product,Long> {
	
	List<Product>findByCat(String cat);

}
