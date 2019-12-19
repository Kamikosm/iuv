package com.iuv.pojo.movie;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.util.Date;

/**
 * @author houke_zou
 * @date 2019/12/19 - 13:16
 */

//for test非正式版
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    private Integer id;
    private String username;
    private Integer parent;
    private Integer root;
    private String content;
    private Date commentTime;
}
