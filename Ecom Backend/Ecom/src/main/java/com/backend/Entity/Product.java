package com.backend.Entity;




import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private long id;
	
	private String title;
	
	
	@Column(columnDefinition = "TEXT")
	private String profile;

	@Column(columnDefinition = "TEXT")
	private String img1;

	@Column(columnDefinition = "TEXT")
	private String img2;
	
	// mobile ,watch,electronics
	private String cat;
	
	private String price;
	
	
	
	
}
