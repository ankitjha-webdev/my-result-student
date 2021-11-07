package com.project.result.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.result.model.Result;

import java.util.List;
public interface ResultRepository extends JpaRepository<Result, Integer> {
        
        // List<Result> findByRegistration(String Registration);

        List<Result> findByRegistrationno(long registrationno);
        // List<Result> findById(Integer id);

}
