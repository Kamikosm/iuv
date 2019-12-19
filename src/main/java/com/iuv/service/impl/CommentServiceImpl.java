package com.iuv.service.impl;

import com.iuv.dao.CommentDao;
import com.iuv.dao.UserDao;
import com.iuv.pojo.movie.Comment;
import com.iuv.pojo.vo.CommentVo;
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
        commentVo.setDatetime(comment.getTime());
        Integer id = comment.getId();
        commentVo.setId(id);
        Integer parentId = comment.getParentId();
        String name = userDao.queryUserById(parentId).getName();
        commentVo.setParent(parentId);
        commentVo.setParentname(name);
        commentVo.setRoot(comment.getRootId());
        commentVo.setUsername(userDao.queryUserById(id).getName());

        return commentVo;
    }
}
