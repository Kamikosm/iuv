package com.iuv.service.impl;

import com.iuv.dao.CommentDao;
import com.iuv.dao.UserDao;
import com.iuv.pojo.movie.Comment;
import com.iuv.pojo.vo.CommentVo;
import com.iuv.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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

    @Autowired
    private UserDao userDao;


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


    /*
     *Author:		Houke_zou
     *E-mail:		houke_zou@163.com
     *Date:			2019年12月19日  下午6:36:56
     *Descript:     pojo向Vo的转换
     */
    @Override
    public CommentVo convertCommentToCommentVo(Comment comment) {

        CommentVo commentVo = new CommentVo();
        commentVo.setContent(comment.getComment());

        Date time = comment.getTime();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String datetime = sdf.format(time);
        commentVo.setDatetime(datetime);

        Integer id = comment.getId();
        commentVo.setId(id);
        Integer parentId = comment.getParentId();
        if(parentId!=null){
            commentVo.setParent(parentId);
            String name = userDao.queryUserById(parentId).getName();
            commentVo.setParentname(name);
        }
        commentVo.setRoot(comment.getRootId());
        commentVo.setUsername(userDao.queryUserById(id).getName());

        return commentVo;
    }

    @Override
    public List<CommentVo> getCommentListByMovieId(Integer movieId) {

        List<Comment> movieComments = getMovieComments(movieId);
        List<CommentVo> commentVoList = new ArrayList<>();

        for (Comment comment: movieComments){
            CommentVo commentVo = convertCommentToCommentVo(comment);
            commentVoList.add(commentVo);
        }

        return commentVoList;
    }
}
