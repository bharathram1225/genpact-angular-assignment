package com.org.SpringRestCource.entities;

import java.sql.Date;
import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table
public class Checkout_Order {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int user_order_id;
	private int amount;
	private int amount_paid;
//	private Date created_at;
	private int amount_due;
	private String currency;
	private String receipt;
	private String id;
	private String entity;
	private String status;
	private int attempts;

	public Checkout_Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getUser_order_id() {
		return user_order_id;
	}

	public void setUser_order_id(int user_order_id) {
		this.user_order_id = user_order_id;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public int getAmount_paid() {
		return amount_paid;
	}

	public void setAmount_paid(int amount_paid) {
		this.amount_paid = amount_paid;
	}

//	public Date getCreated_at() {
//		return created_at;
//	}
//
//	public void setCreated_at(Date date) {
//		this.created_at = date;
//	}

	public int getAmount_due() {
		return amount_due;
	}

	public void setAmount_due(int amount_due) {
		this.amount_due = amount_due;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getReceipt() {
		return receipt;
	}

	public void setReceipt(String receipt) {
		this.receipt = receipt;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getEntity() {
		return entity;
	}

	public void setEntity(String entity) {
		this.entity = entity;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getAttempts() {
		return attempts;
	}

	public void setAttempts(int attempts) {
		this.attempts = attempts;
	}

	@Override
	public String toString() {
		return "Checkout_Order [user_order_id=" + user_order_id + ", amount=" + amount + ", amount_paid=" + amount_paid
				+ ", amount_due=" + amount_due + ", currency=" + currency + ", receipt="
				+ receipt + ", id=" + id + ", entity=" + entity + ", status=" + status
				+ ", attempts=" + attempts + "]";
	}



	

}
