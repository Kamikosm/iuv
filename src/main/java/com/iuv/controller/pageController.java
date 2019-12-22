package com.iuv.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 此类为跳转页面
 * 
 * */
@Controller
@RequestMapping("/")
public class pageController {
	
	@RequestMapping("{page}")
	public String pageGo(@PathVariable String page){
		return page;
	}

}