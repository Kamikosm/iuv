package com.iuv.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iuv.dao.UserDao;
import com.iuv.pojo.user.User;
import com.iuv.service.UserService;
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User getUserByUserId(Integer id) {
        return userDao.queryUserById(id);
    }

    @Override
    public User getUserByUserName(String username) {
        return userDao.queryUserByUserName(username);
    }
}
