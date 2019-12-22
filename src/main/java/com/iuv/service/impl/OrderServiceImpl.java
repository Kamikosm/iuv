package com.iuv.service.impl;

import java.util.List;

import com.iuv.util.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iuv.dao.OrderDao;
import com.iuv.pojo.order.Order;
import com.iuv.service.OrderService;

import javax.annotation.Resource;

/**
 * 订单
 *
 * **/
@Service
public class OrderServiceImpl implements OrderService {
    @Resource
    private OrderDao orderDao;

    @Override
    public List<Order> findOrders(Integer userId) {
        return orderDao.findOrders(userId);
    }

    @Override
    public int insertOrder(Order order) {
        int rows = orderDao.insertOrder(order);
        if(rows==0) throw new ServiceException("订单插入失败");
        return rows;
    }
}
