package com.iuv.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iuv.dao.MovmessageDao;
import com.iuv.pojo.movie.Movie;
import com.iuv.service.MovmessageService;

import java.util.List;

/**
 * 电影详情
 */
@Service
public class MovmessageServiceImpl implements MovmessageService {

    @Autowired
    private MovmessageDao movmessageDao;

    //首页轮播图跳转电影详情
    @Override
    public List<Movie> findLbMsg(String lbName) {
        List<Movie> lbList = movmessageDao.findLbMsg(lbName);
        return lbList;
    }

}

