package com.iuv.dao;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;


import org.apache.ibatis.annotations.Param;

import com.iuv.pojo.movie.Movie;
import org.apache.ibatis.annotations.Select;

/**
 * 电影详情
 */
@Mapper
public interface MovmessageDao {

    //首页轮播图跳转电影详情
    List<Movie> findLbMsg(@Param(value = "lbName")String mvName);
    
    //首页电影跳转电影详情
    List<Movie> findMvMsg(@Param(value = "mainMvName")String mvName);

    @Select("select id from user_before where phone = #{phone}")
    Integer getUserId(@Param("phone") String phone);
}
