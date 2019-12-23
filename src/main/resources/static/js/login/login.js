$(function() {

	//触碰头像显示弹窗请登录
	$(".menu-bar-user").mouseenter(function() {


		$(".menu-bar-denglu").css('display','block'); //显示弹窗

		$.ajax({
			url:'userHello',
			type:'post',
			dataType:'json',
			success:function(data){

				if(!data.test)
					$(".menu-bar-denglu").css('display','block');
				else {
					$(".menu-bar-denglu").css('display','block');
					$(".menu-bar-user").css("background-image","url(img/touxiang1.png)");
					$(".tui-top img").attr("src","img/touxiang1.png");
					$(".user-name").text(data.phone);
					$(".menu-denglu").html("退出登录");

					var url = "getId";
					var params = {"phone":data.phone};
					$.post(url,params,function (result) {
						console.log(result.data)
						sessionStorage.setItem("userId",result.data);
					})
				}
			}
		});
	});

	//鼠标离开头像隐藏请登录弹窗
	$(".menu-bar-user").mouseleave(function() {	
		$(".menu-bar-denglu").css('display','none'); //隐藏弹窗  	
	});

	//鼠标点击"请登录"事件
	$(".tuichu").click(function() {

		if($(".menu-denglu").html() == "请登录"){
//			$(".login1").fadeIn(1);
			$(".login1").css('display','block');
			$('.cover').css('display','block'); //显示遮罩层  
		} 
		else {
			$.ajax({
				url:'hello1',
				type:'post',
				dataType:'json',
				success:function(data){
					$(".menu-bar-user").css("background-image","url(img/touxiang.png)");
					$(".login1").css('display','none');
					$(".register1").css('display','none');
					$(".tui-top img").attr("src","img/touxiang.png");
					$(".tuichu").html("请登录");
					$(".user-name").text("您未登录");
				}
			});
		}
	});

	function loginr(){

		var name = $(".loginname").val();
		if(name == null || name == "" || name.length!=11) {

			$(".p1").css("display","block");
			$(".loginname").css("border","1px solid #FF6400");
		}else {
			$.ajax({
				url:'hello2',
				type:'post',
				data:{'name':name},
				dataType:'text',
				success:function(data) {
					$(".ss1").css({
						"color":"#e0e0e0",
						"border": "1px solid #e0e0e0"
					})
					$(".ss1").off("click")
					var time = 60;
					var timer = setInterval(function () {
						if(time>0){
							time --;
							console.log(time)
							$(".ss1")[0].innerText = "获取验证码("+time+")";
							sessionStorage.setItem("time",time);
						}else{
							sessionStorage.setItem("time","-1");
							clearInterval(timer)
							$(".ss1")[0].innerText = "获取验证码";
							$(".ss1").css({
								"color":"#ff6400",
								"border": "1px solid #ff6400"
							})
							$(".ss1").on("click",loginr)
						}
					},1000);
				}
			});
		}
	}

	function registerr(){

		var name = $(".registername" +
			"").val();
		if(name == null || name == "" || name.length!=11) {

			$(".p4").css("display","block");
			$(".registername").css("border","1px solid #FF6400");
		}else {
			$.ajax({
				url:'hello2',
				type:'post',
				data:{'name':name},
				dataType:'text',
				success:function(data) {
					$(".ss2").css({
						"color":"#e0e0e0",
						"border": "1px solid #e0e0e0"
					})
					$(".ss2").off("click")
					var time = 60;
					var timer = setInterval(function () {
						if(time>0){
							time --;
							console.log(time)
							$(".ss2")[0].innerText = "获取验证码("+time+")";
							sessionStorage.setItem("time",time);
						}else{
							sessionStorage.setItem("time","-1");
							clearInterval(timer)
							$(".ss2")[0].innerText = "获取验证码";
							$(".ss2").css({
								"color":"#ff6400",
								"border": "1px solid #ff6400"
							})
							$(".ss2").on("click",loginr)
						}
					},1000);
				}
			});
		}
	}
	//登录页面点击“获取验证码”事件
	$(".ss1").on("click",loginr);
	
	//注册页面点击“获取验证码”事件
	$(".ss2").on("click",registerr);



	$(".loginname").focus(function () {
		$(".p1").css("display","none");
		$(".loginname").css("border","1px solid #e0e0e0");
	});

	$(".registername").focus(function () {
		$(".p4").css("display","none");
		$(".registername").css("border","1px solid #e0e0e0");
	})

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
		$('.cover').css('display','none');
		$(".login1").fadeOut(1);
		$(".register1").fadeOut(1);
	});

});