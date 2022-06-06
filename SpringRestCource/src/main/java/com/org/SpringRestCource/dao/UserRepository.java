package com.org.SpringRestCource.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.org.SpringRestCource.entities.Course;
import com.org.SpringRestCource.entities.Checkout_Order;

import jakarta.transaction.Transactional;

public interface UserRepository extends JpaRepository<Course, Integer>  {
	public List<Course> findBytitle(String title);
	
	public List<Course> findByidGreaterThan(int id);
	
	@Query("from Course where title=?1 order by id")
	public List<Course> findBytitleSorted(String title);
	
	@Modifying
	@Transactional
	@Query("update Course c set c.title=?1, c.discription=?3 "+"where c.id=?2")
	public void findByIDReplaceCourse(String title, int courseid, String discription);
}

