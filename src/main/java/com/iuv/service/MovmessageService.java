package com.iuv.service;



import com.iuv.pojo.movie.Movie;

import java.util.List;

public interface MovmessageService {

	//首页轮播图跳转电影详情
	List<Movie> findLbMsg(String lbName);
}
