package com.org.SpringRestCource.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity

public class Author {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int author_id;
	private String author_name;
	private String language;
	@JsonBackReference
	@OneToOne(mappedBy = "author")
	private Course course;

	public Author() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Author(int author_id, String author_name, String language) {
		super();
		this.author_id = author_id;
		this.author_name = author_name;
		this.language = language;
	}

	public int getAuthor_id() {
		return author_id;
	}

	public void setAuthor_id(int author_id) {
		this.author_id = author_id;
	}

	public String getAuthor_name() {
		return author_name;
	}

	public void setAuthor_name(String author_name) {
		this.author_name = author_name;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	@Override
	public String toString() {
		return "Author [author_id=" + author_id + ", author_name=" + author_name + ", language=" + language + "]";
	}

}
