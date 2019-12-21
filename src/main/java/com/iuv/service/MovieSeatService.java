package com.iuv.service;

import java.util.List;
import java.util.Map;

import com.iuv.dao.MovieSeatDao;
import com.iuv.pojo.movie.LittleMovieMsg;
import com.iuv.pojo.movie.Movie;
import com.iuv.pojo.movie.MovieScene;
import org.apache.ibatis.annotations.Param;

/**
 * 选座
 *
 * */
public interface MovieSeatService {
    List<MovieScene> getScenes(Integer movieId);

    List<Integer> getSeats(Integer sceneId);

    int addSeats(Integer sceneId,Integer userId,Integer...seatIds);

    LittleMovieMsg getMovieMsg(Integer movieId);
}
