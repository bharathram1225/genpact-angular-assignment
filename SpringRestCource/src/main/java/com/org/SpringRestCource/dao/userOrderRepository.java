package com.org.SpringRestCource.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.org.SpringRestCource.entities.Course;
import com.org.SpringRestCource.entities.Checkout_Order;
import jakarta.transaction.Transactional;

public interface userOrderRepository extends JpaRepository<Checkout_Order, Integer>  {
	@Modifying
	@Transactional
	@Query("select user_order_id from Checkout_Order where id =?1")
	public void findBySelectUserOrderId(String id);
	
	@Modifying
	@Transactional
	@Query("update Checkout_Order set amount_paid=?1,amount_due=(amount_paid-amount),status='success' where id =?2 and user_order_id =?3")
	public void findByIDUpdatePaymentOrder(int amount_paid, String id, int user_order_id);

}

