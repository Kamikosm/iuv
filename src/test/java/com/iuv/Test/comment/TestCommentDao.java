package com.iuv.Test.comment;


import com.iuv.dao.CommentDao;
import com.iuv.pojo.movie.Comment;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;

/*
 *Author:		Houke_zou
 *E-mail:		houke_zou@163.com
 *Date:			2019年12月19日  下午3:56:56
 */


@RunWith(SpringRunner.class)
@SpringBootTest
public class TestCommentDao {

    @Autowired
    private CommentDao commentDao;

    @Test
    public void insertComment() {
        System.out.println("测试开始了");
        Comment comment = new Comment();
        comment.setId(5);
        comment.setUserId(5);
        comment.setComment("可可");
        comment.setGraded(6.1);
        comment.setLikes(200);
        comment.setMovieId(3);
        comment.setParentId(1);
        comment.setRootId(1);
        commentDao.insertComment(comment);
        System.out.println("测试结束了");
    }

    @Test
    public void queryCommentById() {
        System.out.println("测试开始了");
        Comment comment = commentDao.queryCommentById(1);
        System.out.println(comment);
        System.out.println("测试结束了");
    }

    @Test
    public void queryCommentListByMovieId() {
        System.out.println("测试开始了");
        List<Comment> list = commentDao.queryCommentListByMovieId(1);
        System.out.println(list);
        System.out.println("测试结束了");
    }

    @Test
    public void updateComment() {
        System.out.println("测试开始了");
        Comment comment = new Comment();
        comment.setId(5);
        comment.setUserId(5);
        comment.setComment("可可");
        comment.setGraded(6.1);
        comment.setLikes(200);
        comment.setMovieId(3);
        comment.setParentId(1);
        comment.setRootId(2);
        commentDao.updateComment(comment);
        System.out.println("测试结束了");
    }

}
