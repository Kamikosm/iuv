package com.iuv.service.impl;

import com.iuv.dao.CommentDao;
import com.iuv.pojo.movie.Comment;
import com.iuv.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
 *Author:		Houke_zou
 *E-mail:		houke_zou@163.com
 *Date:			2019年12月5日  下午3:56:56
 */


@Service
public class CommentServiceImpl implements CommentService{

    @Autowired
    private CommentDao commentDao;


    @Override
    public Integer addComment(Comment comment) {
        return commentDao.insertComment(comment);
    }

    @Override
    public Comment getCommentById(Integer id) {
        return commentDao.queryCommentById(id);
    }

    @Override
    public List<Comment> getMovieComments(Integer id) {

        return commentDao.queryCommentListByMovieId(1);
    }
}
