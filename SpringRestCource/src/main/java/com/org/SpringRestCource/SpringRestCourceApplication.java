package com.org.SpringRestCource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.org.SpringRestCource.dao.UserRepository;
import com.org.SpringRestCource.entities.Course;

@SpringBootApplication
public class SpringRestCourceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringRestCourceApplication.class, args);
//		ApplicationContext context = SpringApplication.run(SpringRestCourceApplication.class, args);
//		UserRepository userRepository = context.getBean(UserRepository.class);
//		
//		Course course = new Course();
//		course.setId(10);
//		course.setTitle("malburn");
//		course.setDiscription("it is place");
//		
//		Course course2 = userRepository.save(course);
//		
//		System.out.println(course2);
		
	}

}
