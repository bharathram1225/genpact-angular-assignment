package com.org.SpringRestCource.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MyController_Web {
	
	//this is for about page
		@RequestMapping(path="/about", method = RequestMethod.GET)
		public String about(@RequestParam("name") String name, Model model) {
			System.out.println("this is about page ");
			model.addAttribute("name",name);
			model.addAttribute("date", new Date().toLocaleString());
			List<String> list = List.of("bharath", "lakshmi", "john","uday");
			model.addAttribute("listnames", list);
			return "about";
		}
}
