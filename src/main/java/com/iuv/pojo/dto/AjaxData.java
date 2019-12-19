package com.iuv.pojo.dto;

import java.util.List;

import lombok.Data;

/**
 *  @Author: 				Houke_zou
 *  @Email: 				houke_zou@163.com
 *  @Date: 					2019年10月18日  下午2:24:31
 *  @Desc:					封装对象,便于前端ajax接收
 */

@Data
public class AjaxData {
    private boolean success = true;
    private String errMsg;
    private String	 message;
    private Object object;
    private List<?> objectList;
}
