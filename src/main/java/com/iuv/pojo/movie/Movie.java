package com.iuv.pojo.movie;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;
/**
 * 电影POJO
 * 
 * */
@Data
public class Movie implements Serializable {
	private static final long serialVersionUID = 6239917530570596544L;
	private Integer id;
	private String mvName;
	private String type;
	private Date startTime;
	private Double mvTime;
	private String mvStar;
	private String master;
	private String area;
	private String mvMsg;
	private String message;
	private String smlPic;
	private String bigPic;
	private String hengPic;
	private Double score;
	private Double sum;
	private Double price;
}
