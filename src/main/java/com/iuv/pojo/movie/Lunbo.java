package com.iuv.pojo.movie;

import java.io.Serializable;
/**轮播图POJO*/
public class Lunbo implements Serializable {
	private static final long serialVersionUID = 6239917530570596544L;
	private Integer id;
	private String lbPic;
	private String mvName;
	private String mvMsg;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getLbPic() {
		return lbPic;
	}
	public void setLbPic(String lbPic) {
		this.lbPic = lbPic;
	}
	public String getMvName() {
		return mvName;
	}
	public void setMvName(String mvName) {
		this.mvName = mvName;
	}
	public String getMvMsg() {
		return mvMsg;
	}
	public void setMvMsg(String mvMsg) {
		this.mvMsg = mvMsg;
	}
	@Override
	public String toString() {
		return "Lunbo [id=" + id + ", lbPic=" + lbPic + ", mvName=" + mvName + ", mvMsg=" + mvMsg + "]";
	}	
}
