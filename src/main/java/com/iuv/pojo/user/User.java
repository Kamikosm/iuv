
package com.iuv.pojo.user;

import lombok.Data;

import java.util.Date;

@Data
public class User {
	private Integer id;
	private String name;
	private String phone;
	private String password;
	private String city;
	private String message;
	private String sex;
	private String headPhoto; //头像
	private Date birthday;
}
