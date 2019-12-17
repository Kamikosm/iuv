package com.iuv.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 此类为跳转页面
 * 
 * */
@Controller
@RequestMapping("/")
public class pageController {


	//主页
	@RequestMapping("main")
	public String main(){
		return "main";
	}

	@RequestMapping("search")
	public String search(HttpServletRequest request,String searchname){
		request.getSession().setAttribute("searchname", searchname);
		return "search";
	}
	//分类电影展示页面
	@RequestMapping("movclass")
	public String movclass(){
		return "movclass";
	}
	@RequestMapping("movclass1")
	public String movclass1(String classname,HttpServletRequest request){
		request.getSession().setAttribute("classname", classname);
		return "redirect:movclass";
	}
	@RequestMapping("movmessage")
	public String movmessage(){
		return "movmessage";
	}
	@RequestMapping("movmessage1")
	public String movmessage1(Integer id,HttpServletRequest request){
		request.getSession().setAttribute("movmessageid", id);
		return "redirect:movmessage";
	}
	@RequestMapping("myticket")
	public String myticket(){
		return "myticket";
	}
	@RequestMapping("chooseseat")
	public String doChooseSeat() {
		return "ChooseSeat";
	}
	@RequestMapping("chooseseat1")
	public String doChooseSeat1(Integer id,HttpServletRequest request) {
		request.getSession().setAttribute("chooseseatid", id);
		return "redirect:chooseseat";
	}

}