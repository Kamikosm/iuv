package com.iuv.service;

import java.util.List;
import com.iuv.pojo.movie.Movie;

/**
 * 电影分类
 */
public interface MovClassService {

    //导航条跳转分类电影
    List<Movie> findMVClass(String type);

}
