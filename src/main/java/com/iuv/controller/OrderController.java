package com.iuv.controller;

import com.iuv.pojo.movie.JsonResult;
import com.iuv.pojo.order.Order;
import com.iuv.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author kamiko
 * @create 2019-12-22 17:02
 */
@RestController
@RequestMapping("/order/")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @RequestMapping("findOrders")
    public JsonResult findOrders(Integer userId){
        return new JsonResult(orderService.findOrders(userId));
    }

    @RequestMapping("insertOrder")
    public JsonResult insertOrder(Order order){
        return new JsonResult(orderService.insertOrder(order));
    }
}
