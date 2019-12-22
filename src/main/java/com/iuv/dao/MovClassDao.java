package com.iuv.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.iuv.pojo.movie.Movie;
/**
 * 电影分类
 */
@Mapper
public interface MovClassDao {

    //导航条跳转电影分类
    List<Movie> findMVClass(@Param(value = "type")String type);
   
    //查看全部热映电影跳转电影分类
    List<Movie> findHotAll();
    
    //查看全部即将上映电影跳转电影分类
    List<Movie> findTimeAll();

}
