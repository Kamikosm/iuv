package com.iuv.controller;

import com.iuv.pojo.movie.Movie;
import com.iuv.pojo.movie.MovieScene;
import com.iuv.service.MovmessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.*;

/**
 * 电影详情
 */
@Controller
public class MovmessageController {

    @Autowired
    private MovmessageService movmessageService;

    //首页轮播图跳转电影详情
    @RequestMapping("lbMvMsg")
    @ResponseBody
    public List<Movie> lbMvMsg(String mvName) {
        List<Movie> lbList = movmessageService.findLbMsg(mvName);
        return lbList;
    }
    
    //首页电影跳转电影详情
    @RequestMapping("MvMsg")
    @ResponseBody
    public List<Movie> MvMsg(String mvName) {
        List<Movie> mvList = movmessageService.findMvMsg(mvName);
        return mvList;
    }
    
    //首页电影跳转电影详情选座
    @RequestMapping("mvMsgSeat")
    @ResponseBody
    public List<Movie> mvMsgSeat(String mvName) {
    	List<Movie> mvSceneList = movmessageService.findMsgSeat(mvName);
    	return mvSceneList;
    }
    
    //根据年月查询电影场次
    @RequestMapping("msgYearDay")
    @ResponseBody
    public List<MovieScene> msgYearDay(String mvName,String movYear, String movDay) {
		List<MovieScene> mvScenes = movmessageService.findYearDay(mvName,movYear, movDay);
		return mvScenes;
	}

}
