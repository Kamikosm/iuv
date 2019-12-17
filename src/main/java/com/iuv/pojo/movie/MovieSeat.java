package com.iuv.pojo.movie;

import java.io.Serializable;

/**
 * 选座POJO  注释:不了解  自定义
 * 
 * */
public class MovieSeat implements Serializable{
	private static final long serialVersionUID = -6335151051761335730L;
	private Integer seatId = 1;
	private String dataSt = "N";
	private Integer movieId;
	public Integer getSeatId() {
		return seatId;
	}
	public void setSeatId(Integer seatId) {
		this.seatId = seatId;
	}
	public String getDataSt() {
		return dataSt;
	}
	public void setDataSt(String dataSt) {
		this.dataSt = dataSt;
	}
	public Integer getMovieId() {
		return movieId;
	}
	public void setMovieId(Integer movieId) {
		this.movieId = movieId;
	}
}
