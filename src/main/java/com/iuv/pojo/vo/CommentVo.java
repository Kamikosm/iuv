package com.iuv.pojo.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


/*
 *Author:		Houke_zou
 *E-mail:		houke_zou@163.com
 *Date:			2019年12月19日  下午4:58:23
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentVo {

    private Integer id;
    private String username;
    private Integer parent;
    private String parentname;
    private Integer root;
    private String content;
    private Date datetime;


}
