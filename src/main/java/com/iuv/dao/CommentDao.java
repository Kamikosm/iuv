
package com.iuv.dao;

import com.iuv.pojo.movie.Comment;
import org.apache.ibatis.annotations.Mapper;

import java.lang.reflect.Array;
import java.util.List;

@Mapper
public interface CommentDao {

    Integer insertComment(Comment comment);


    Comment queryCommentById(Integer id);

    List<Comment> queryCommentListByMovieId(Integer id);

    Integer insertCommentNoRoot(Comment comment);

    Comment selectCommentByContent(String content);

    void updateComment(Comment comment);
}
