package com.iuv.service;

import java.util.List;

import com.iuv.pojo.movie.Movie;

/**
 * 电影详情
 */
public interface MovmessageService {

	//首页轮播图跳转电影详情
	List<Movie> findLbMsg(String lbName);

}
