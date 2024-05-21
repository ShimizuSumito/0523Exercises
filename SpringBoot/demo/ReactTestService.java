package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repositories.ReactTestRepository;

@Service
public class ReactTestService {
	@Autowired
	private ReactTestRepository repository;

	public List<? extends ReactTestInterface> GetAll() {
		return repository.findAll();
	}

	public Optional<ReactTestTable> Get(int id) {
		// TODO 自動生成されたメソッド・スタブ
		return repository.findById(id);
	}
}
