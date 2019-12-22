package com.iuv.service.impl;


import com.iuv.dao.MovieSeatDao;
import com.iuv.pojo.movie.LittleMovieMsg;
import com.iuv.pojo.movie.MovieScene;
import com.iuv.util.ServiceException;
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
    public int addSeats(Integer sceneId, Integer userId, Integer[]seatIds) {
        int rows = movieSeatDao.addSeats(sceneId, userId, seatIds);
        if(rows==0) throw new ServiceException("插入座位失败!");
        return rows;
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
