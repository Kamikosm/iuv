$(function(){

	//首页轮播图页面跳转电影详情页面
	$(".menu-rank-ul li").click(function() {

		var lbName = $(this).find("p:first").html();
		sessionStorage.setItem("lbName",lbName);
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
	
	//查看全部热映电影跳转电影详情
	$(".hot-all").click(function(){
		
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
	
	//首页电影跳转电影详情
	$(".look").click(function() {

		var mvName = $(this).parent().parent().find(".movie-title").html();
		alert(mvName)
		sessionStorage.setItem("mvName",mvName);
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