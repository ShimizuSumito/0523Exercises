package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReactTestController {
	@Autowired
	private ReactTestService service;
	
	@GetMapping("/GetChara")
	@CrossOrigin
	public List<? extends ReactTestInterface> GetAll()
	{
		System.out.println(service.GetAll());
		return service.GetAll();
	}
	
	@GetMapping("/GetChara/{id}")
	@CrossOrigin
	public Optional<ReactTestTable> Get(@PathVariable int id)
	{
		return service.Get(id);
	}
}
