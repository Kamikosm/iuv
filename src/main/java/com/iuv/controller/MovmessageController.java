package com.iuv.controller;

import com.iuv.pojo.movie.Movie;
import com.iuv.service.MovmessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
    	System.out.println(mvName);
        List<Movie> mvList = movmessageService.findMvMsg(mvName);
        return mvList;
    }

}
