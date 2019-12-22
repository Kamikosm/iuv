package com.iuv.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.iuv.pojo.user.Register;
import com.iuv.pojo.user.User;
import com.iuv.service.UserService;
import com.iuv.util.SendSms;

/**
 * 此类为登录注册
 */
@Controller
public class LoginController {

	@Autowired
	private UserService userService;

	//登录状态判断处理
	@RequestMapping("userHello")
	@ResponseBody
	public Map<String, Object> userHello(HttpServletRequest request) {

		Map<String, Object> map = new HashMap<String, Object>();
		HttpSession session = request.getSession();
		Object test = session.getAttribute("test");
		if(test == null) {
			map.put("test", false);
		} else {
			map.put("test", true);
			map.put("phone", session.getAttribute("phone"));
		}
		return map;
	} 

	//退出登录状态
	@RequestMapping("hello1")
	@ResponseBody
	public String hello1(HttpServletRequest request) {

		HttpSession session = request.getSession();
		session.setAttribute("test", null);
		session.setAttribute("phone", null);
		session.setAttribute("yzm", null);
		return "";
	}

	//获取验证码
	@RequestMapping("hello2")
	@ResponseBody
	public String hello2(HttpServletRequest request,String name) {

		HttpSession session = request.getSession();
		String code = SendSms.sendSms(name);
		session.setAttribute("yzm", code);
		return "";
	}

	//登录处理
	@RequestMapping("login")
	@ResponseBody
	public String login(String url,HttpServletRequest request,Register login) {

		if(url == null) return "redirect:main";
		User user = new User();

		user.setPhone(login.getName());
		user.setPassword(login.getPwd());
		user = userService.login(user);
		//验证码判断
		if(user != null && login.getYzm().equals(request.getSession().getAttribute("yzm"))) {

			HttpSession session = request.getSession();
			session.setAttribute("test", "test");
			session.setAttribute("phone", login.getName());
		} else {
			HttpSession session = request.getSession();
			session.setAttribute("test", null);
		}
		return "redirect:"+url;
	}

	//注册处理
	@RequestMapping("register")
	@ResponseBody
	public String register(HttpServletRequest request,String url,Register register) {
		
		if(url==null) return "redirect:main";
		User user = new User();
		
		user.setPhone(register.getName());
		user.setPassword(register.getPwd());
		request.getSession().setAttribute("url", url);
		//验证码判断
		if(register.getYzm().equals(request.getSession().getAttribute("yzm"))) {
			userService.register(user);
		} else { 
			return "regislose";
		}
		return "regissuccess";	
	}
	
	//注册失败处理
	@RequestMapping("regislose")
	public String regislose(HttpServletRequest request){
		return "redirect:"+(String) request.getSession().getAttribute("url");
	}
	
	//注册成功处理
	@RequestMapping("regissuccess")
	public String regissuccess(HttpServletRequest request){
		return "redirect:"+(String) request.getSession().getAttribute("url");
	}
	
}
