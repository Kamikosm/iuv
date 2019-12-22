package com.iuv.pojo.order;

import lombok.Data;

import java.util.Date;
/**
 * 订单
 * */
@Data
public class Order {
	private Integer id;
	private String mvName;
	private Integer userId;
	private Double price;
	private String movieImg;
	private String seatId;
	private Integer hall;
	private Date createTime;
	private Date sceneTime;
}
