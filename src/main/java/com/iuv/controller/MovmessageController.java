package com.iuv.controller;

import com.iuv.pojo.dto.AjaxData;
import com.iuv.pojo.movie.Comment;
import com.iuv.pojo.movie.Movie;
import com.iuv.service.MovmessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.sound.midi.Soundbank;

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
    public List<Movie> lbMvMsg(String lbName) {
    	System.out.println(lbName);
        List<Movie> lbList = movmessageService.findLbMsg(lbName);
        return lbList;
    }
    
    //首页电影跳转电影详情
    @RequestMapping("MvMsg")
    @ResponseBody
    public List<Movie> MvMsg(String mainMvName) {
    	System.out.println(mainMvName);
        List<Movie> mvList = movmessageService.findLbMsg(mainMvName);
        System.out.println(mvList);
        return mvList;
    }

}