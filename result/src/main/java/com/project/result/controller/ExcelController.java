package com.project.result.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

// import java.util.ArrayList;
import java.util.List;

import java.util.Map;


import com.project.result.helper.Helper;
import com.project.result.service.ExcelService;
import com.project.result.model.Result;

@Controller
@CrossOrigin("*")
@RequestMapping("/file")
public class ExcelController{

    @Autowired
private ExcelService excelService;


@PostMapping("/excel/upload")
public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file){
	if(Helper.checkExcelFormat(file)) {
		this.excelService.save(file);
        return ResponseEntity.ok(Map.of("message", "File uploaded successfully"));
	}
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid file format. Please Upload Excel File only.");
}

@GetMapping("/excel")
public List<Result> getAllResult(){
	return this.excelService.getAllResults();
}


	
}
