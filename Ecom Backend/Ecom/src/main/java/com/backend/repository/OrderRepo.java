package com.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.backend.Entity.Ord;
import com.backend.Entity.user;

public interface OrderRepo extends JpaRepository<Ord, Long> {
	
	List<Ord> findByUsr(user usr);
}
