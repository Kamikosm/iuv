package com.iuv.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.iuv.pojo.user.User;
@Mapper
public interface UserDao {

    User queryUserById(Integer id);

    User queryUserByUserName(String username);
}
