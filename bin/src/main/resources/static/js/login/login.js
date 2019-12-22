$(function() {

	//鼠标点击头像显示弹窗
	$(".menu-bar-user").mouseenter(function() {
		$(".menu-bar-denglu").css('display','block'); //显示弹窗
	});
	//鼠标离开头像隐藏弹窗
	$(".menu-bar-user").mouseleave(function() {	
		$(".menu-bar-denglu").css('display','none'); //隐藏弹窗  	
	});
	//鼠标点击显示登录弹窗事件
	$(".tuichu").click(function() {
		$(".login1").fadeIn(1);
		$('.cover').css('display','block'); //显示遮罩层  	
	});
	//鼠标点击“注册”跳转注册弹窗事件
	$("#a2").click(function() {
		$(".login1").fadeOut(1);
		$('.cover').css('display','none');
		$('.register1').fadeIn(1);
		$('.cover').css('display','block');
	});
	//鼠标点击“返回账号登录”返回登录弹窗事件
	$("#aa1").click(function() {
		$(".register1").fadeOut(1);
		$('.cover').css('display','none');
		$('.login1').fadeIn(1);
		$('.cover').css('display','block');
	});
	//关闭弹窗事件
	$(".xx").click(function() {
		$(".login1").fadeOut(1);
		$(".register1").fadeOut(1);
		$('.cover').css('display','none');
	});
});