package com.iuv.Test.comment;

import com.iuv.pojo.movie.Comment;
import com.iuv.service.CommentService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

/**
 * @author houke_zou
 * @date 2019/12/19 - 19:53
 */

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestCommentService {


    @Autowired
    private CommentService commentService;

    @Test
    public void getCommentListByMovieId() {
        System.out.println("测试开始了");
        List<Comment> movieComments = commentService.getMovieComments(1);
        System.out.println(movieComments.size());
        System.out.println(movieComments);
        System.out.println("测试结束了");
    }

    @Test
    public void addRootId() {
        System.out.println("测试开始了");
        Comment comment = new Comment();
        comment.setUserId(5);
        comment.setComment("可可");
        comment.setGraded(6.1);
        comment.setLikes(200);
        comment.setMovieId(3);
        comment.setParentId(1);
        //commentService.addCommentWithoutRoot(comment);

        System.out.println("测试结束了");
    }



}
