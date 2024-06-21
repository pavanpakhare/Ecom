package com.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.Entity.user;

public interface UserRepo extends JpaRepository<user,Long> {
  List<user> findByUsername(String username);
   user findByUsernameAndPassword(String username,String password);
  	
}
