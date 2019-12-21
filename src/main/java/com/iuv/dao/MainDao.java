package com.iuv.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.iuv.pojo.movie.Lunbo;
import com.iuv.pojo.movie.Movie;

/**主页*/
@Mapper
public interface MainDao {

    //轮播图
    List<Lunbo> findLunbo();

    //热映电影
    List<Movie> findHotMv();

    //最新电影
    List<Movie> findNewMv();

    //爱情电影
    List<Movie> findLoveMv();

    //喜剧电影
    List<Movie> findXijuMv();
}
