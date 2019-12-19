package com.iuv.service;

import java.util.List;
import java.util.Map;

import com.iuv.dao.MovieSeatDao;
import com.iuv.pojo.movie.Movie;
import com.iuv.pojo.movie.MovieScene;

/**
 * 选座
 *
 * */
public interface MovieSeatService {
    List<MovieScene> getScenes(Integer movieId);
}
