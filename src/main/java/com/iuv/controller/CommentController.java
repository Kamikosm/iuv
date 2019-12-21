package com.iuv.controller;

import com.iuv.pojo.dto.AjaxData;
import com.iuv.pojo.vo.CommentVo;
import com.iuv.service.CommentService;
import com.iuv.service.MovieService;
import com.iuv.util.HttpServletRequestUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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

        return data;
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
