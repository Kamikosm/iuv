package com.iuv.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iuv.dao.MainDao;
import com.iuv.pojo.movie.Lunbo;
import com.iuv.pojo.movie.Movie;
import com.iuv.service.MainService;

/**
 * 主页
 * */
@Service
public class MainServiceImpl implements MainService {

	@Autowired
	private MainDao mainDao;

	//轮播图
	@Override
	public List<Lunbo> findLunbo() {
		List<Lunbo> findLb = mainDao.findLunbo();
		return findLb;
	}

	//热映电影
	@Override
	public List<Movie> findHotMv() {
		List<Movie> findMovies = mainDao.findHotMv();
		return findMovies;
	}

	//即将上映
	@Override
	public List<Movie> findNewMv() {
		List<Movie> findMovies = mainDao.findNewMv();
		return findMovies;
	}

	//爱情电影
	@Override
	public List<Movie> findLoveMv() {
		List<Movie> findMovies = mainDao.findLoveMv();
		return findMovies;
	}

	//喜剧电影
	@Override
	public List<Movie> findXijuMv() {
		List<Movie> findMovies = mainDao.findXijuMv();
		return findMovies;
	}

}
