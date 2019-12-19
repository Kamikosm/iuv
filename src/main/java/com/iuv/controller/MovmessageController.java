package com.iuv.controller;




import com.iuv.pojo.dto.AjaxData;
import com.iuv.pojo.movie.Comment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

/**
 * 
 * 电影详情
 * */
@Controller
public class MovmessageController {

    @ResponseBody
    @PostMapping("/user/getcomment")
    private AjaxData getcomment(HttpServletRequest request){
        AjaxData data = new AjaxData();
        List commentList = new ArrayList<>();
        Comment comment_1 = new Comment(1,"keke",null,1,"可可",new Date());
        Comment comment_2 = new Comment(2,"dede",1,1,"可可-1",new Date());
        Comment comment_3 = new Comment(3,"pepe",2,1,"可可-2",new Date());

        commentList.add(comment_1);
        commentList.add(comment_2);
        commentList.add(comment_3);

        data.setObjectList(commentList);
        return data;
    }


}
