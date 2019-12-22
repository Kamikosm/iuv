package com.iuv.service;

import com.iuv.pojo.order.Order;

import java.util.List;

/**
 * 订单
 *
 * */
public interface OrderService {
    List<Order> findOrders(Integer userId);

    int insertOrder(Order order);
}
