package com.org.SpringRestCource.controller;


import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.razorpay.*;

import com.org.SpringRestCource.dao.UserRepository;
import com.org.SpringRestCource.dao.userOrderRepository;
import com.org.SpringRestCource.entities.Checkout_Order;
//import com.org.SpringRestCource.Helper.FileUploadHelper;
import com.org.SpringRestCource.entities.Course;
import com.org.SpringRestCource.services.CourseService;

@RestController
public class MyController {
	
	@Autowired
	private CourseService courseService;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	userOrderRepository userOrderRepository;
	
	
	
//	@Autowired
//	private FileUploadHelper fileuploadhelper;

	@GetMapping("/home")
	public String home() {
		return "Welcome to cources application";
	}
	
	//get the courses
	@CrossOrigin
	@GetMapping("/courses")
	public ResponseEntity<List<Course>> getCourses()
	{
		return this.courseService.getCourses();
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/courses/{courseId}")
	public ResponseEntity<Course> getCourse(@PathVariable String courseId) {
		return this.courseService.getCourse(Integer.parseInt(courseId));
	}
	
	@CrossOrigin
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course) {
		return this.courseService.addCourse(course);
	}
	
	//replace the course with respect to id
	@PutMapping("/courses/{courseid}")
	public Course replaceCourse(@RequestBody Course course, @PathVariable int courseid) {
		this.courseService.replaceCourse(course, courseid);
		return course;
	}
	
	//delete the course of perticular id
	@CrossOrigin
	@DeleteMapping("/courses/{courseid}")
	public void deleteCourse(@PathVariable int courseid) {
		this.courseService.deleteCourse(courseid);
		
	}
	
	//Find by title
	@GetMapping("/courses/title/{title}")
	public List<Course> getTitle(@PathVariable String title) {
		return this.courseService.findBytitles(title);
	}
	
	//find the course where the id is greater then provided id
	@GetMapping("courses/greater/{id}")
	public List<Course> getCourseGreaterThanid(@PathVariable int id){
		return this.courseService.findByCourseGreaterThanid(id);
	}
	
	//find by title and sort by description
	@GetMapping("course/title/sort/{title}")
	public List<Course> getTitleSortedByDescription(@PathVariable String title){
		return this.courseService.findByTitleSortByDescripttion(title);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/courses/payment")
	public String getpayment(@RequestBody Map<String, Object> data) throws Exception{
		System.out.println(data);
		System.out.println(data.keySet());
		System.out.println(data.values());
		int amt = Integer.parseInt(data.get("amount").toString());
		System.out.println(amt);
		System.out.println("doing good");
		
		var client = new RazorpayClient("rzp_test_RspZitrCm5wfTl", "22qz0bHwA91uPodtt6rLmWNW");
		
		JSONObject options = new JSONObject();
		options.put("amount", amt*100);
		options.put("currency", "INR");
		options.put("receipt", "txn_123456");
		Order order= client.orders.create(options);
		System.out.println("options "+options.keySet());
		System.out.println("order "+order);
		
		Checkout_Order checkout_Order = new Checkout_Order();
		checkout_Order.setAmount(order.get("amount"));
		checkout_Order.setAmount_paid(order.get("amount_paid"));
		
//		checkout_Order.setCreated_at(order.get("created_at"));
		checkout_Order.setAmount_due(order.get("amount_due"));
		checkout_Order.setCurrency(order.get("currency"));
		checkout_Order.setReceipt(order.get("receipt"));
		checkout_Order.setId(order.get("id"));
		checkout_Order.setEntity(order.get("entity"));
		checkout_Order.setStatus(order.get("status"));
		checkout_Order.setAttempts(order.get("attempts"));
		
		userOrderRepository.save(checkout_Order);
		return order.toString();
	}
	
	@PutMapping("/courses/updatepayment")
	public void getupdatepaymentorderdetails(@RequestBody Checkout_Order chk_order) {
		
		this.courseService.updatepaymentorderdetails(chk_order);
	}
	
//	//to handling the file uploads 
//	@PostMapping("courses/fileupload")
//	public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file){
//		
//		try 
//		{
//			
////			System.out.println(file.getSize());
////			System.out.println(file.getOriginalFilename());
////			System.out.println(file.getName());
////			if(file.isEmpty()) {
////				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("file is empty!....");
////			}
//			
////			if(!file.getContentType().equals("image/jpg")) {
////				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Only jpeg files are allowed !......");
////			}
//			
//			
//			//file upload code
//			boolean f = fileuploadhelper.uploadfile(file);
//			if(f) 
//			{
////				return ResponseEntity.ok("File uploaded successfully");
//				return ResponseEntity.ok(ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/").path(file.getOriginalFilename()).toUriString());
//			}
//			
//		} 
//		catch (Exception e) 
//		{
//			e.printStackTrace();
//		}
//		
//		
//		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File Not uploaded");
//	}
	
	
}
