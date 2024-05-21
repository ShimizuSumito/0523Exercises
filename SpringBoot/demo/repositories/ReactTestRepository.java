package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.ReactTestInterface;
import com.example.demo.ReactTestTable;

@Repository
public interface ReactTestRepository extends JpaRepository<ReactTestTable, Integer> {
	public ReactTestInterface getById(int id);

}
