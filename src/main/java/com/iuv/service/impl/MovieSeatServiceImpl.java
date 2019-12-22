package com.iuv.service.impl;


import com.iuv.dao.MovieSeatDao;
import com.iuv.pojo.movie.LittleMovieMsg;
import com.iuv.pojo.movie.MovieScene;
import org.springframework.stereotype.Service;

import com.iuv.service.MovieSeatService;

import javax.annotation.Resource;
import java.util.List;

@Service
public class MovieSeatServiceImpl implements MovieSeatService {
    @Resource
    private MovieSeatDao movieSeatDao;

    @Override
    public List<MovieScene> getScenes(Integer movieId) {
        return movieSeatDao.getScenes(movieId);
    }

    @Override
    public List<Integer> getSeats(Integer sceneId) {
        return movieSeatDao.getSeats(sceneId);
    }

    @Override
    public int addSeats(Integer sceneId, Integer userId, Integer...seatIds) {
        return 0;
    }

    @Override
    public LittleMovieMsg getMovieMsg(Integer movieId) {
        return movieSeatDao.getMovieMsg(movieId);
    }

    @Override
    public MovieScene getScene(Integer sceneId) {
        return movieSeatDao.getScene(sceneId);
    }
}
