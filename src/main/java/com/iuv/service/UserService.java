package com.iuv.service;

import java.util.List;

import com.iuv.pojo.movie.Comment;
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

}
