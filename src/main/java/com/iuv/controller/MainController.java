package com.iuv.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.iuv.pojo.movie.Lunbo;
import com.iuv.pojo.movie.Movie;
import com.iuv.service.MainService;

/**
 * 此类为主页
 * */
@Controller
public class MainController {

	@Autowired
	private MainService mainService;

	//轮播图
	@RequestMapping("mainLunbo")
	@ResponseBody
	public List<Lunbo> mainLunbo() {
		List<Lunbo> findLunbos = mainService.findLunbo();
		return findLunbos;
	}

	//热映电影
	@RequestMapping("mainHotMv")
	@ResponseBody
	public List<Movie> mainHotMv() {
		List<Movie> mainHotmvs = mainService.findHotMv();
		return mainHotmvs;
	}

	//即将上映
	@RequestMapping("mainNewMv")
	@ResponseBody
	public List<Movie> mainNewMv() {
		List<Movie> mainNewmvs = mainService.findNewMv();
		return mainNewmvs;
	}

	//爱情电影
	@RequestMapping("mainLoveMv")
	@ResponseBody
	public List<Movie> mainLoveMv() {
		List<Movie> mainLoveMv = mainService.findLoveMv();
		return mainLoveMv;
	}

	//喜剧电影
	@RequestMapping("mainXijuMv")
	@ResponseBody
	public List<Movie> mainXijuMv() {
		List<Movie> mainXijuMv = mainService.findXijuMv();
		return mainXijuMv;
	}
	
	/**搜索引擎*/
	@RequestMapping("autoComplete")
	@ResponseBody
	public List<Movie> autoComplete() {
		List<Movie> autoComplete = mainService.autoComplete();
		return autoComplete;
	}
	
}
