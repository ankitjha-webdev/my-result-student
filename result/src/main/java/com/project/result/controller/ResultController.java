package com.project.result.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.result.repository.ResultRepository;
import java.util.List;

import com.project.result.model.Result;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/result")
public class ResultController {

    @Autowired
    private ResultRepository resultRepository;

    // get all results
    @GetMapping("/all")
    public List<Result> getAllResults() {
        return resultRepository.findAll();
    
    }
    
    @GetMapping("/byregno/{regno}")
    public List<Result> getresultbyreg(@PathVariable long regno) {
        return this.resultRepository.findByRegistrationno(regno);
    }
    
}
