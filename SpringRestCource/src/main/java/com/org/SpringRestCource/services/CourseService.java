package com.org.SpringRestCource.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.org.SpringRestCource.entities.Course;
import com.org.SpringRestCource.entities.Checkout_Order;


public interface CourseService {
	public ResponseEntity<List<Course>> getCourses();
	public ResponseEntity<Course> getCourse(int courseId);
	public Course addCourse(Course course);
	public void replaceCourse(Course course, int courseid);
	public void deleteCourse(int courseid);
	public List<Course> findBytitles(String title);
	public List<Course> findByCourseGreaterThanid(int id);
	public List<Course> findByTitleSortByDescripttion(String title);
	public void updatepaymentorderdetails(Checkout_Order chk_order);
	

}
