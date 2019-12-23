$(function(){

	//首页轮播图页面跳转电影详情页面
	$(".menu-rank-ul li").click(function() {

		var lbName = $(this).find("p:first").html();
		sessionStorage.setItem("mvName",lbName);
		sessionStorage.setItem("numkey","1");
		window.location.href = "movmessage";
	});

	//轮播图
	$.ajax({
		url:'mainLunbo',
		type:'post',
		dataType:'json',
		success:function(data){

			$(".menu-ranking li").each(function(index,el){
				$(el).find("p:first").html(data[index].mvName);
				$(el).find("p:last").html(data[index].mvMsg);
			});
		}
	});
	
	//导航条跳转分类电影
	$(".menu-bar-ul li").click(function() {

		var mvType = $(this).find("a").html();
		sessionStorage.setItem("type",mvType);
		window.location.href = "movclass";
	});
	
	//查看全部热映电影跳转电影分类
	$(".hot-all a").click(function() {
		
		sessionStorage.setItem("numkey","3");
		window.location.href = "movclass";
	});
	
	//查看全部即将上映电影跳转电影分类
	$(".new-all a").click(function() {
		
		sessionStorage.setItem("numkey","5");
		window.location.href = "movclass";
	});
	
	//查看全部爱情电影跳转电影分类
	$(".love-all a").click(function() {

		var mvType = "爱情";
		sessionStorage.setItem("type",mvType);
		window.location.href = "movclass";
	});
	
	//查看全部喜剧电影跳转电影分类
	$(".xiju-all a").click(function() {

		var mvType = "喜剧";
		sessionStorage.setItem("type",mvType);
		window.location.href = "movclass";
	});

	//热映电影
	$.ajax({
		url:'mainHotMv',
		type:'post',
		dataType:'json',
		success:function(data){

			var li = $(".hotmv-pic-ul li:first");
			var liFirst = $(".hotmv-pic-ul li:first img:first");
			$(liFirst).attr("src",data[0].hengPic);
			$(li).find(".movie-title").html(data[0].mvName);
			$(".hotmv-pic-ul li").each(function(index,el){

				$(".hotmv-pic-ul li").not(li).eq(index-1).find("img").attr("src",data[index].smlPic);
				$(".hotmv-pic-ul li").not(li).eq(index-1).find(".movie-title").html(data[index].mvName);
			});
//			var tr = $(".hotmv-pic-ul li");
//			$(tr[0]).find("img").attr("src",data[0].hengPic);
//			for(var i = 1; i<tr.length; i++){
//			$(tr[i]).find("img").attr("src",data[i].smlPic);
//			}
		}
	});
	
	//首页电影跳转电影详情评论
	$(".look").click(function() {

		var mvName = $(this).parent().parent().find(".movie-title").html();
		sessionStorage.setItem("mvName",mvName);
		sessionStorage.setItem("numkey","2");
		window.location.href = "movmessage";
	});
	
	//首页电影跳转电影详情选场次
	$(".buy").click(function() {

		var mvName = $(this).parent().parent().find(".movie-title").html();
		sessionStorage.setItem("mvName",mvName);
		sessionStorage.setItem("numkey","4");
		window.location.href = "movmessage";
	});

	//即将上映
	$.ajax({
		url:'mainNewMv',
		type:'post',
		dataType:'json',
		success:function(data){

			var li = $(".newmv-pic-ul li:first");
			var liFirst = $(".newmv-pic-ul li:first img:first");
			$(liFirst).attr("src",data[0].hengPic);
			$(li).find(".movie-title").html(data[0].mvName);
			$(".newmv-pic-ul li").each(function(index,el){

				$(".newmv-pic-ul li").not(li).eq(index-1).find("img").attr("src",data[index].smlPic);
				$(".newmv-pic-ul li").not(li).eq(index-1).find(".movie-title").html(data[index].mvName);
			});
		}
	});

	//爱情电影
	$.ajax({
		url:'mainLoveMv',
		type:'post',
		dataType:'json',
		success:function(data){

			$(".lovemv-pic-ul li").each(function(index,el){
				$(el).find("img").attr("src",data[index].smlPic);
				$(el).find("div:first").html(data[index].mvName);
			});
		}
	});

	//喜剧电影
	$.ajax({
		url:'mainXijuMv',
		type:'post',
		dataType:'json',
		success:function(data){

			$(".xijumv li").each(function(index,el){
				$(el).find("img").attr("src",data[index].smlPic);
				$(el).find("div:first").html(data[index].mvName);
			});
		}
	});

});