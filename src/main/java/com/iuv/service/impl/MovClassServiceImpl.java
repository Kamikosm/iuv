package com.iuv.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iuv.dao.MovClassDao;
import com.iuv.pojo.movie.Movie;
import com.iuv.service.MovClassService;
/**
 * 分类
 */
@Service
public class MovClassServiceImpl implements MovClassService {

	@Autowired
	private MovClassDao movClassDao;

	//导航条跳转分类电影
	@Override
	public List<Movie> findMVClass(String type) {
		List<Movie> findMovies = movClassDao.findMVClass(type);
		return findMovies;
	}

}
