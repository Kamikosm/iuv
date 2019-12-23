package com.iuv.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.iuv.pojo.movie.Movie;
import com.iuv.pojo.movie.MovieScene;

/**
 * 电影详情
 */
public interface MovmessageService {

	//首页轮播图跳转电影详情
	List<Movie> findLbMsg(String lbName);
	
	//首页电影跳转电影详情
	List<Movie> findMvMsg(String mainMvName);

	//首页电影跳转电影详情选座
	List<Movie> findMsgSeat(String msgSeatName);

	//根据年月查询电影场次
    List<MovieScene> findYearDay(@Param(value = "msgSeatName")String mvSeat,
    		String movYear,String movDay);

    Integer getUserId(String phone);
}
