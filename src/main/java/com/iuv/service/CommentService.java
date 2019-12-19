package com.iuv.service;

import com.iuv.pojo.movie.Comment;

import java.util.List;

/*
 *Author:		Houke_zou
 *E-mail:		houke_zou@163.com
 *Date:			2019年10月5日  下午3:56:56
 */


public interface CommentService {

	Integer addComment(Comment comment);

	Comment getCommentById(Integer id);

	List<Comment> getMovieComments(Integer id);




}
