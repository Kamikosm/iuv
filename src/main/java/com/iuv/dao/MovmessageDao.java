package com.iuv.dao;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;


import org.apache.ibatis.annotations.Param;

import com.iuv.pojo.movie.Movie;
/**
 * 电影详情
 */
@Mapper
public interface MovmessageDao {

    //首页轮播图跳转电影详情
    List<Movie> findLbMsg(@Param(value = "mvName")String mvName);

}
