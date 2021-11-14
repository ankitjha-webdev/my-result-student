package com.project.result.helper;

import com.project.result.model.Result;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Helper {
//	Checking File type is excel or not
	public static boolean checkExcelFormat(MultipartFile file) {
		
		
		String contentType =file.getContentType();
		
		if (contentType.equals("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
            return true;
        } else {
            return false;
        }
	}
	//Converting excel to list of Result

	public static List<Result> convertExcelToListofResult(InputStream is)
	{
		List<Result> list = new ArrayList<>();
		
		try
		{
			XSSFWorkbook workbook= new XSSFWorkbook(is);
			XSSFSheet sheet =workbook.getSheet("data");
			
			 int rowNumber = 0;
	            Iterator<Row> iterator = sheet.iterator();
	            
	            while (iterator.hasNext()) {
					Row row = (Row) iterator.next();
					
					if(rowNumber==0) {
						rowNumber++;
						continue;
					}
					   Iterator<Cell> cells = row.iterator();
					   
					   int cid = 0;
					   
					   Result r = new Result();
					   
					   while (cells.hasNext()) {
		                    Cell cell = cells.next();

		                    switch (cid) {
		                        case 0:
		                            r.setId((int) cell.getNumericCellValue());
		                            break;
		                        case 1:
		                            r.setRegistrationno((Double) cell.getNumericCellValue());
		                            break;
		                        case 2:
		                            r.setSem(cell.getStringCellValue());
		                            break;
		                        case 3:
		                            r.setSubjectcode(cell.getStringCellValue());
		                            break;
									case 4:
		                            r.setName(cell.getStringCellValue());
		                            break;
									case 5:
									r.setSubjecttype(cell.getStringCellValue());
									break;
									case 6:
									r.setSubjectcredit(cell.getStringCellValue());
									break;
									case 7:
									r.setSubjectname(cell.getStringCellValue());
									break;
									case 8:
									r.setGrade(cell.getStringCellValue());
									break;
		                        default:
		                            break;
		                    }
		                    cid++;
		                }

		                list.add(r);
					
				}
			
		}catch (Exception e) {
			
			e.printStackTrace();
		}
		return list;
	}
	

}









