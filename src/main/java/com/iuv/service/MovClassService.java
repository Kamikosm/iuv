package com.iuv.service;

import java.util.List;
import com.iuv.pojo.movie.Movie;

/**
 * 电影分类
 */
public interface MovClassService {

	//导航条跳转电影分类
	List<Movie> findMVClass(String type);

	//查看全部热映电影跳转电影分类
	List<Movie> findHotAll();

	//查看全部即将上映电影跳转电影分类
	List<Movie> findTimeAll();

}
