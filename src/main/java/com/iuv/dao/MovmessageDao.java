package com.iuv.dao;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;


import org.apache.ibatis.annotations.Param;

import com.iuv.pojo.movie.Movie;
/**
 * 电影详情
 */
import com.iuv.pojo.movie.MovieScene;
@Mapper
public interface MovmessageDao {

    //首页轮播图跳转电影详情
    List<Movie> findLbMsg(@Param(value = "lbName")String mvName);
    
    //首页电影跳转电影详情评论
    List<Movie> findMvMsg(@Param(value = "mainMvName")String mvName);

    //首页电影跳转电影详情选座
    List<Movie> findMsgSeat(@Param(value = "msgSeatName")String mvSeat);
    
    //根据年月查询电影场次
    List<MovieScene> findYearDay(@Param(value = "msgSeatName")String mvSeat,
    			String movYear,String movDay);
    
}
