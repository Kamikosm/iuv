$(function() {
	//加载初始化头像(ajax处理)
	$.ajax({
		url:'hello',
		type:'post', 
		dataType:'json',
		success:function(data){
			if(!data.test)
				$(".menu-bar-user").css("background-image","url(img/touxiang.png)");
			else
			{
				$(".menu-bar-user").css("background-image","url(img/touxiang1.png)");
			}
		}
	});
	//触碰头像显示弹窗(ajax判断状态)
	$(".menu-bar-user").mouseenter(function() {
		$.ajax({
			url:'hello',
			type:'post',
			dataType:'json',
			success:function(data){
				if(!data.test)
					$(".menu-bar-denglu").first().show();
				else
				{
					$(".menu-bar-denglu").last().show();
					$(".menu-bar-user").css("background-image","url(img/touxiang1.png)");
					$(".user_phone").text(data.phone);
				}
			}
		}); 	
	});
	//鼠标离开头像隐藏弹窗事件
	$(".menu-bar-user").mouseleave(function() {	
		$(".menu-bar-denglu").hide(); //隐藏弹窗  	
	});
	//鼠标点击显示登录弹窗事件
	$(".menu-denglu").click(function() {
		$(".loginname").attr("placeholder","请输入手机号码");
		$(".loginname").css("border","1px solid #e0e0e0");
		$(".login1").fadeIn(1);
		$('.cover').css('display','block'); //显示遮罩层  	
	});
	//鼠标点击退出用户登录状态事件(ajax操作)
	$(".menu-tuichu").click(function() {	
		$.ajax({
			url:'hello1',
			type:'post',
			dataType:'json',
			success:function(data){
				$(".menu-bar-user").css("background-image","url(img/touxiang.png)");
				$(".menu-bar-denglu").first().show();
				$(".menu-bar-denglu").last().hide();
			}
		});  	
	});
	//鼠标点击跳转注册弹窗事件
	$("#a2").click(function() {
		$(".registername").attr("placeholder","请输入手机号码");
		$(".registername").css("border","1px solid #e0e0e0");
		$(".login1").fadeOut(1);
		$('.cover').css('display','none');
		$('.register1').fadeIn(1);
		$('.cover').css('display','block');
	});
	//鼠标点击返回登录弹窗事件
	$("#aa1").click(function() {
		$(".loginname").attr("placeholder","请输入手机号码");
		$(".loginname").css("border","1px solid #e0e0e0");
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
	//登录获取验证码事件(ajax操作)
	$(".ss1").click(function(){
		name = $(".loginname").val();
		if(name==null||name==""){
//		alert(name+"号码为空");
		$(".loginname").attr("placeholder","号码不能为空");
		$(".loginname").css("border","1px solid #FF6400");
//		$("#loginname::placeholder").css("color","red");
		}
		else{
		$.ajax({
			url:'hello2',
			type:'post',
			data:{'name':name},
			dataType:'text',
			success:function(data){
			}
		});
		}
	});
	//注册获取验证码事件(ajax操作)
	$(".ss2").click(function(){
		name = $(".registername").val();
		if(name==null||name==""){
//		alert(name+"号码为空");
		$(".registername").attr("placeholder","号码不能为空");
		$(".registername").css("border","1px solid #FF6400");
		}
		else{
		$.ajax({
			url:'hello2',
			type:'post',
			data:{'name':name},
			dataType:'text',
			success:function(data){
			}
		});
		}
	});
});