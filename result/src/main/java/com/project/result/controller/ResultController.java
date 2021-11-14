package com.project.result.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.result.repository.ResultRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.project.result.helper.Helper;
import com.project.result.model.Result;
import com.project.result.service.ExcelService;
import com.project.result.exception.ResourceNotFoundException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/result")
public class ResultController {

    @Autowired
    private ResultRepository resultRepository;
    
    @Autowired
    private ExcelService excelService;

    // get all results
    @GetMapping("/all")
    public List<Result> getAllResults() {
        return resultRepository.findAll();
    
    }
//    Add Student Result
    @PostMapping("/addresult")
	public Result createResult(@RequestParam Result result) {
		return resultRepository.save(result);
	}
 // get student by registration
// 	@GetMapping("/employees/{id}")
// 	public ResponseEntity<Result> getEmployeeByRegistrationno(@PathVariable Long Registrationno) {
// 		Result result = ( resultRepository.findByRegistrationno(Registrationno))
// 				.orElseThrow(() -> new ResourceNotFoundException("Student not exist with registration :" + Registrationno));
// 		return ResponseEntity.ok(result);
// 	}
// 	
    @GetMapping("/byregno/{regno}")
    public List<Result> getresultbyreg(@PathVariable long regno) {
        return this.resultRepository.findByRegistrationno(regno);
    }
    
 // update Result 
	
 	@PutMapping("/byregno/{regno}")
 	public ResponseEntity<Result> updateResult(@PathVariable Long registrationno, @RequestBody Result resultDetails){
 		Result result = resultRepository.findByRegistrationno(registrationno)
 				.orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" + id));
 		
 		result.setName(resultDetails.getName());
 		result.setRegistrationno(resultDetails.getRegistrationno());
 		result.setSem(resultDetails.getSem());
 		
 		Result updatedResult = resultRepository.save(result);
 		return ResponseEntity.ok(updatedResult);
 	}
 // delete Result rest api
 	@DeleteMapping("/result/{id}")
 	public ResponseEntity<Map<String, Boolean>> deleteResult(@PathVariable Long id){
 		Result result = resultRepository.findById(id)
 				.orElseThrow(() -> new ResourceNotFoundException("Student not exist with this Registration Number :" + id));
 		
 		resultRepository.delete(result);
 		Map<String, Boolean> response = new HashMap<>();
 		response.put("deleted", Boolean.TRUE);
 		return ResponseEntity.ok(response);
 	}
    
//    Excel File Uploading
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
