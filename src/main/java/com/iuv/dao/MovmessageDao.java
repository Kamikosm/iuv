package com.iuv.dao;


import org.apache.ibatis.annotations.Mapper;


import org.apache.ibatis.annotations.Param;

import com.iuv.pojo.movie.Movie;

import java.util.List;

/**
 * 电影详情
 * */
@Mapper
public interface MovmessageDao {

    //首页轮播图跳转电影详情
    List<Movie> findLbMsg(@Param(value = "mvName")String mvName);

}
