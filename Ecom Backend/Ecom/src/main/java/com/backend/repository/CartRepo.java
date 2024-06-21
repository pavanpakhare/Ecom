package com.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.Entity.Cart;
import com.backend.Entity.user;

public interface CartRepo extends JpaRepository<Cart, Long> {
	
  	List<Cart> findByUsr(user usr);

}
