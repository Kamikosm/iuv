package com.iuv.service;

import com.iuv.pojo.movie.Comment;
import com.iuv.pojo.vo.CommentVo;

import java.util.List;

/*
 *Author:		Houke_zou
 *E-mail:		houke_zou@163.com
 *Date:			2019年12月19日  下午3:56:56
 */


public interface CommentService {

	/*
	*   Author:         Houke_zou
	*   Email:          houke_zou@163.com
	*   CreateTime:     2019/12/21  14:00
	*   Desc:           添加二级及以下评论
	*/
	Integer addComment(Comment comment);

	/*
	*   Author:         Houke_zou
	*   Email:          houke_zou@163.com
	*   CreateTime:     2019/12/21  14:00
	*   Desc:           添加一级评论
	*/
	Integer addCommentWithoutRoot(Comment comment);

	Comment getCommentById(Integer id);

	List<Comment> getMovieComments(Integer MovieId);


	/*
	* pojo对象转换成vo对象
	* @Autowired Houke_zou
	* */
	CommentVo convertCommentToCommentVo(Comment comment);


	/*
	 * 通过MovieId直接获得与之相关的评论包装类列表
	 * @Autowired Houke_zou
	 * */
	List<CommentVo> getCommentListByMovieId(Integer movieId);


}
