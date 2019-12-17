package com.iuv.pojo.movie;

import java.io.Serializable;
import java.util.Date;
/**
 * 电影POJO
 * 
 * */
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
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getMvName() {
		return mvName;
	}
	public void setMvName(String mvName) {
		this.mvName = mvName;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	public Double getMvTime() {
		return mvTime;
	}
	public void setMvTime(Double mvTime) {
		this.mvTime = mvTime;
	}
	public String getMvStar() {
		return mvStar;
	}
	public void setMvStar(String mvStar) {
		this.mvStar = mvStar;
	}
	public String getMaster() {
		return master;
	}
	public void setMaster(String master) {
		this.master = master;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getMvMsg() {
		return mvMsg;
	}
	public void setMvMsg(String mvMsg) {
		this.mvMsg = mvMsg;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getSmlPic() {
		return smlPic;
	}
	public void setSmlPic(String smlPic) {
		this.smlPic = smlPic;
	}
	public String getBigPic() {
		return bigPic;
	}
	public void setBigPic(String bigPic) {
		this.bigPic = bigPic;
	}
	public String getHengPic() {
		return hengPic;
	}
	public void setHengPic(String hengPic) {
		this.hengPic = hengPic;
	}
	public Double getScore() {
		return score;
	}
	public void setScore(Double score) {
		this.score = score;
	}
	public Double getSum() {
		return sum;
	}
	public void setSum(Double sum) {
		this.sum = sum;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Movie [id=" + id + ", mvName=" + mvName + ", type=" + type + ", startTime=" + startTime + ", mvTime="
				+ mvTime + ", mvStar=" + mvStar + ", master=" + master + ", area=" + area + ", mvMsg=" + mvMsg
				+ ", message=" + message + ", smlPic=" + smlPic + ", bigPic=" + bigPic + ", hengPic=" + hengPic
				+ ", score=" + score + ", sum=" + sum + ", price=" + price + "]";
	}
	

}
