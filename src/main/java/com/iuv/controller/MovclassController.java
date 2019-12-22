package com.iuv.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.iuv.pojo.movie.Movie;
import com.iuv.service.MovClassService;

/**
 * 此类为电影分类
 */
@Controller
public class MovclassController {

	@Autowired
	private MovClassService movClassService;

	//导航条跳转电影分类
	@RequestMapping("mainMvClass")
	@ResponseBody
	public List<Movie> mainMvClass(String type) {
		List<Movie> list = movClassService.findMVClass(type);
		return list;
	}

	//查看全部热映电影跳转电影分类
	@RequestMapping("hotMvMsg")
	@ResponseBody
	public List<Movie> hotMvMsg() {
		List<Movie> hotList = movClassService.findHotAll();
		return hotList;
	}

	//查看全部即将上映电影跳转电影分类
	@RequestMapping("timeMvMsg")
	@ResponseBody
	public List<Movie> timeMvMsg() {
		List<Movie> timeList = movClassService.findTimeAll();
		return timeList;
	}

}
