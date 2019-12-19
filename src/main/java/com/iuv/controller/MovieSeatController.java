package com.iuv.controller;

import com.iuv.pojo.movie.JsonResult;
import com.iuv.service.MovieSeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *此类为座位
 * */
@RequestMapping("ticket")
@RestController
public class MovieSeatController {
    @Autowired
    private MovieSeatService movieSeatService;

    @RequestMapping("getMsg")
    public JsonResult getMovieMsg(Integer movieId){
        return new JsonResult(movieSeatService.getMovieMsg(movieId));
    }
}
