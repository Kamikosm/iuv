package com.iuv.controller;

import com.iuv.pojo.dto.AjaxData;
import com.iuv.pojo.movie.Comment;
import com.iuv.pojo.vo.CommentVo;
import com.iuv.service.CommentService;
import com.iuv.util.HttpServletRequestUtil;
import io.micrometer.core.instrument.Meter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * 此类为评论Controller
 * 
 * */
@RestController
public class CommentController {

//    @Autowired
//    private MovieService movieService;

    @Autowired
    private CommentService commentService;

    @ResponseBody
    @PostMapping("/user/addcomment")
    private AjaxData addcomment(HttpServletRequest request){
        AjaxData data = new AjaxData();

        String content = HttpServletRequestUtil.getString(request,"content");
        Integer parent = HttpServletRequestUtil.getInt(request,"parent");
        Integer root = HttpServletRequestUtil.getInt(request,"root");

        HttpSession session=request.getSession();
        session.setAttribute("movieId",1);

        System.out.println(root);
        System.out.println(parent);
        System.out.println(content);

        session.setAttribute("userId",1);
        Integer userId = (Integer) session.getAttribute("userId");
        Integer movieId = (Integer) session.getAttribute("movieId");
        Comment comment = new Comment();
        comment.setUserId(userId);
        comment.setParentId(parent);
        comment.setMovieId(movieId);
        comment.setComment(content);

        if(root==0){
            if(parent != 0){
                //如果parent不为0，说明是二级评论，设置root等于parent即可
                root = parent;
                comment.setRootId(root);
                commentService.addComment(comment);
                return data;
            }else{
                //如果parent为0，说明这是一级评论
                //此时，root的值直接等于此时的id值。
                commentService.addCommentWithoutRoot(comment);
                return data;
            }

        }else{
            //如果root不为0，则为三级级或以下评论，正常添加即可
            comment.setRootId(root);
            commentService.addComment(comment);
            return data;
        }

    }

    @ResponseBody
    @PostMapping("/user/getcomment")
    private AjaxData getcomment(HttpServletRequest request){
        AjaxData data = new AjaxData();
//        String movieName = HttpServletRequestUtil.getString(request,"movieName");
        HttpSession session=request.getSession();
        session.setAttribute("movieId",1);
        Integer movieId = (Integer) session.getAttribute("movieId");

        List<CommentVo> commentList = commentService.getCommentListByMovieId(movieId);




//        List commentList = new ArrayList<>();
//        Comment comment_1 = new Comment(1,"keke",null,1,"可可",new Date());
//        Comment comment_2 = new Comment(2,"dede",1,1,"可可-1",new Date());
//        Comment comment_3 = new Comment(3,"pepe",2,1,"可可-2",new Date());
//
//        commentList.add(comment_1);
//        commentList.add(comment_2);
//        commentList.add(comment_3);
//
        data.setObjectList(commentList);
        return data;
    }

}
