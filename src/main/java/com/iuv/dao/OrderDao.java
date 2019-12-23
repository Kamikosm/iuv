package com.iuv.dao;

import com.iuv.pojo.order.Order;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * 订单
 * 
 * */
@Mapper
public interface OrderDao {
    @Select("select * from userorder where user_id=#{userId} order by order_time desc")
    List<Order> findOrders(Integer userId);

    int insertOrder(Order order);
}
