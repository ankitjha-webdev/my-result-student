package com.project.result.service;

import java.util.List;

import javax.management.loading.PrivateClassLoader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.project.result.helper.Helper;
import com.project.result.model.Result;
import com.project.result.repository.ResultRepository;

@Service
public class ExcelService {
	@Autowired
	private ResultRepository repository;
	
public void save (MultipartFile file) {
	try {
	List<Result> results =	Helper.convertExcelToListofResult(file.getInputStream());
	this.repository.saveAll(results);
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}

}
public List<Result> getAllResults() 
{   
	return this.repository.findAll();
}
}
