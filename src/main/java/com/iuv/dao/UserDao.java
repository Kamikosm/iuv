package com.iuv.dao;


import org.apache.ibatis.annotations.Mapper;

import com.iuv.pojo.user.User;
@Mapper
public interface UserDao {

    User queryUserById(Integer id);

    User queryUserByUserName(String username);
    
    //用户注册
    public void register(User user);
    
    //用户登录
    public User login(User user);
    
}
