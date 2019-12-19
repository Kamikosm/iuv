package com.iuv.pojo.movie;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;

/**
 * 选座POJO  注释:不了解  自定义
 * 
 * */
@Data
public class MovieScene implements Serializable{
	private static final long serialVersionUID = -6335151051761335730L;
	private Integer id;
	private Date sceneTime;
	private Integer hall;
}
