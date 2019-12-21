package com.iuv.pojo.order;

import java.util.Date;
/**
 * 订单
 * */
public class Order {
	private Integer id;
	private String mvName;
	private Integer userId;
	private String price;
	private Date orderTime;
	private Integer seatId1;
	private Integer seatId2;
	private Integer seatId3;
	private Integer seatId4;
	private Integer seatId5;
	private Integer seatId6;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getMvName() {
		return mvName;
	}
	public void setMvName(String mvName) {
		this.mvName = mvName;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public Date getOrderTime() {
		return orderTime;
	}
	public void setOrderTime(Date orderTime) {
		this.orderTime = orderTime;
	}
	public Integer getSeatId1() {
		return seatId1;
	}
	public void setSeatId1(Integer seatId1) {
		this.seatId1 = seatId1;
	}
	public Integer getSeatId2() {
		return seatId2;
	}
	public void setSeatId2(Integer seatId2) {
		this.seatId2 = seatId2;
	}
	public Integer getSeatId3() {
		return seatId3;
	}
	public void setSeatId3(Integer seatId3) {
		this.seatId3 = seatId3;
	}
	public Integer getSeatId4() {
		return seatId4;
	}
	public void setSeatId4(Integer seatId4) {
		this.seatId4 = seatId4;
	}
	public Integer getSeatId5() {
		return seatId5;
	}
	public void setSeatId5(Integer seatId5) {
		this.seatId5 = seatId5;
	}
	public Integer getSeatId6() {
		return seatId6;
	}
	public void setSeatId6(Integer seatId6) {
		this.seatId6 = seatId6;
	}

}
