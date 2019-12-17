package com.iuv.pojo.user;

public class Register {
	@Override
	public String toString() {
		return "Register [name=" + name + ", pwd=" + pwd + ", yzm=" + yzm + "]";
	}
	private String name;
	private String pwd;
	private String yzm;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getYzm() {
		return yzm;
	}
	public void setYzm(String yzm) {
		this.yzm = yzm;
	}
}
