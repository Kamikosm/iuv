package com.iuv.pojo.movie;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/*
 *Author:		Houke_zou
 *E-mail:		houke_zou@163.com
 *Date:			2019年12月19日  下午3:56:56
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    private Integer id;
    private Integer userId;
    private Integer movieId;
    private Date time;
    private Double graded;
    private Integer likes;
    private String comment;
    private Integer parentId;
    private Integer rootId;
}
