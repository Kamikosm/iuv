package com.iuv.service.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iuv.dao.MovmessageDao;
import com.iuv.pojo.movie.Movie;
import com.iuv.pojo.movie.MovieScene;
import com.iuv.service.MovmessageService;

/**
 * 电影详情
 */
@Service
public class MovmessageServiceImpl implements MovmessageService {

	@Autowired
	private MovmessageDao movmessageDao;

	//首页轮播图跳转电影详情
	@Override
	public List<Movie> findLbMsg(String lbName) {
		List<Movie> lbList = movmessageDao.findLbMsg(lbName);
		return lbList;
	}

	//首页电影跳转电影详情评论
	@Override
	public List<Movie> findMvMsg(String mainMvName) {
		List<Movie> mvList = movmessageDao.findMvMsg(mainMvName);
		return mvList;
	}

	//首页电影跳转电影详情选座
	@Override
	public List<Movie> findMsgSeat(String msgSeatName) {

		List<Movie> movieScenes = movmessageDao.findMsgSeat(msgSeatName);
		return movieScenes;
	}

	//根据年月查询电影场次
	@Override
	public List<MovieScene> findYearDay(String msgSeatName,String movYear, String movDay) {
		List<MovieScene> movieScenes = movmessageDao.findYearDay(msgSeatName,movYear, movDay);
		return movieScenes;
	}

	@Override
	public Integer getUserId(String phone) {
		return movmessageDao.getUserId(phone);
	}
}
