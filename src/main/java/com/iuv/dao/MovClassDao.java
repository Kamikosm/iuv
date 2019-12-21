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

    //导航条跳转分类电影
    List<Movie> findMVClass(@Param(value = "type")String type);

}
