package com.iuv.service;

import java.util.List;

import com.iuv.pojo.movie.Lunbo;
import com.iuv.pojo.movie.Movie;

/**
 * 首页
 */
public interface MainService {
	
	/**所有的电影名*/
	List<Movie> autoComplete();

	//轮播图
	List<Lunbo> findLunbo();

	//热映电影
	List<Movie> findHotMv();

	//即将上映
	List<Movie> findNewMv();

	//爱情电影
	List<Movie> findLoveMv();

	//喜剧电影
	List<Movie> findXijuMv();
}
