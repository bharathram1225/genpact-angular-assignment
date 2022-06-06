//package com.org.SpringRestCource.Helper;
//
//import java.io.File;
//import java.io.FileOutputStream;
//import java.io.IOException;
//import java.io.InputStream;
//import java.nio.file.Files;
//import java.nio.file.Paths;
//import java.nio.file.StandardCopyOption;
//
//import org.springframework.core.io.ClassPathResource;
//import org.springframework.stereotype.Component;
//import org.springframework.web.multipart.MultipartFile;
//
//@Component
//public class FileUploadHelper {
//	
//	
////	public final String UPLOAD_DIR="C:\\Users\\bhara\\Downloads\\SpringRestCource\\SpringRestCource\\src\\main\\resources\\static\\images";
//	public final String UPLOAD_DIR=	new ClassPathResource("static/images/").getFile().getAbsolutePath();
//	
//	
//	public FileUploadHelper() throws IOException {
//		super();
//		// TODO Auto-generated constructor stub
//	}
//
//	public boolean uploadfile(MultipartFile file) {
//		boolean flag = false;
//		
//		try {
//			
//			//read
////			InputStream is = file.getInputStream();
////			byte data[] = new byte[is.available()];
////			is.read(data);
//			
//			//write
////			FileOutputStream fos=new FileOutputStream(UPLOAD_DIR+"\\"+file.getOriginalFilename());
////			fos.write(data);
////			
////			fos.flush();
////			fos.close();
////			is.close();
//			
//			//another way
//			Files.copy(file.getInputStream(), Paths.get(UPLOAD_DIR+File.separator+file.getOriginalFilename()) , StandardCopyOption.REPLACE_EXISTING);
//			flag=true;
//			
//			
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return flag;
//		
//	}
//}
