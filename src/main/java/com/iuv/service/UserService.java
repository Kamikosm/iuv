package com.iuv.service;

import com.iuv.pojo.user.User;

public interface UserService {
	/**
	 *	通过id来找User
	 * 	@Author Houke_zou
	 */
	User getUserByUserId(Integer id);
	/**
	 *	通过user来找User
	 * 	@Author Houke_zou
	 */
	User getUserByUserName(String username);
	
	//用户注册
    public void register(User user);
    
    //用户登录
    public User login(User user);

}
