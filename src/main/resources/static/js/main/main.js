$(function(){
	//搜索引擎
	$(function() {
		var availableTags = [];
		$.ajax({
			url:'autoComplete',
			type:'post',
			dataType:'json',
			success:function(data){
				for(var i = 0; i < data.length; i++){
					availableTags[availableTags.length] = data[i].mvName;
				}
			}
		});
		$("#autocomplete").autocomplete({
			source: availableTags
		});
	});
	//轮播图
	$.ajax({
		url:'mainLunbo',
		type:'post',
		dataType:'json',
		success:function(data){
			$(".menu-ranking li").each(function(index,el){
				$(el).find("a").attr("href","movmessage1?id="+data[index].id);
				$(el).find("p:first").html(data[index].mvName);
				$(el).find("p:last").html(data[index].mvMsg);
			});
		}
	});
	//热映电影
	$.ajax({
		url:'mainHotmv',
		type:'post',
		dataType:'json',
		success:function(data){
			$(".pic11 img").attr("src",data[0].hengPic);
			$(".pic11 .movie-title").html(data[0].mvName);
			$(".pic11 .look a").attr("href","movmessage1?id="+data[0].id);
			$(".pic11 .buy a").attr("href","chooseseat1?id="+data[0].id);		
			$(".pic12 img").attr("src",data[1].smlPic);
			$(".pic12 .movie-title").html(data[1].mvName);
			$(".pic12 .look a").attr("href","movmessage1?id="+data[1].id);
			$(".pic12 .buy a").attr("href","chooseseat1?id="+data[1].id);		
			$(".pic13 img").attr("src",data[2].smlPic);
			$(".pic13 .movie-title").html(data[2].mvName);
			$(".pic13 .look a").attr("href","movmessage1?id="+data[2].id);
			$(".pic13 .buy a").attr("href","chooseseat1?id="+data[2].id);		
			$(".pic14 img").attr("src",data[3].smlPic);
			$(".pic14 .movie-title").html(data[3].mvName);
			$(".pic14 .look a").attr("href","movmessage1?id="+data[3].id);
			$(".pic14 .buy a").attr("href","chooseseat1?id="+data[3].id);		
			$(".pic15 img").attr("src",data[4].smlPic);
			$(".pic15 .movie-title").html(data[4].mvName);
			$(".pic15 .look a").attr("href","movmessage1?id="+data[4].id);
			$(".pic15 .buy a").attr("href","chooseseat1?id="+data[4].id);		
			$(".pic16 img").attr("src",data[5].smlPic);
			$(".pic16 .movie-title").html(data[5].mvName);
			$(".pic16 .look a").attr("href","movmessage1?id="+data[5].id);
			$(".pic16 .buy a").attr("href","chooseseat1?id="+data[5].id);		
			$(".pic17 img").attr("src",data[6].smlPic);
			$(".pic17 .movie-title").html(data[6].mvName);
			$(".pic17 .look a").attr("href","movmessage1?id="+data[6].id);
			$(".pic17 .buy a").attr("href","chooseseat1?id="+data[6].id);		
			$(".pic18 img").attr("src",data[7].smlPic);
			$(".pic18 .movie-title").html(data[7].mvName);
			$(".pic18 .look a").attr("href","movmessage1?id="+data[7].id);
			$(".pic18 .buy a").attr("href","chooseseat1?id="+data[7].id);		
			$(".pic19 img").attr("src",data[8].smlPic);
			$(".pic19 .movie-title").html(data[8].mvName);
			$(".pic19 .look a").attr("href","movmessage1?id="+data[8].id);
			$(".pic19 .buy a").attr("href","chooseseat1?id="+data[8].id);		
			$(".pic110 img").attr("src",data[9].smlPic);
			$(".pic110 .movie-title").html(data[9].mvName);
			$(".pic110 .look a").attr("href","movmessage1?id="+data[9].id);
			$(".pic110 .buy a").attr("href","chooseseat1?id="+data[9].id);		
			$(".pic111 img").attr("src",data[10].smlPic);
			$(".pic111 .movie-title").html(data[10].mvName);
			$(".pic111 .look a").attr("href","movmessage1?id="+data[10].id);
			$(".pic111 .buy a").attr("href","chooseseat1?id="+data[10].id);		
		}
	});
	//最新电影
	$.ajax({
		url:'mainNewmv',
		type:'post',
		dataType:'json',
		success:function(data){
			$(".pic21 img").attr("src",data[0].hengPic);
			$(".pic21 .movie-title").html(data[0].mvName);
			$(".pic21 .look a").attr("href","movmessage1?id="+data[0].id);
			$(".pic21 .buy a").attr("href","chooseseat1?id="+data[0].id);		
			$(".pic22 img").attr("src",data[1].smlPic);
			$(".pic22 .movie-title").html(data[1].mvName);
			$(".pic22 .look a").attr("href","movmessage1?id="+data[1].id);
			$(".pic22 .buy a").attr("href","chooseseat1?id="+data[1].id);		
			$(".pic23 img").attr("src",data[2].smlPic);
			$(".pic23 .movie-title").html(data[2].mvName);
			$(".pic23 .look a").attr("href","movmessage1?id="+data[2].id);
			$(".pic23 .buy a").attr("href","chooseseat1?id="+data[2].id);		
			$(".pic24 img").attr("src",data[3].smlPic);
			$(".pic24 .movie-title").html(data[3].mvName);
			$(".pic24 .look a").attr("href","movmessage1?id="+data[3].id);
			$(".pic24 .buy a").attr("href","chooseseat1?id="+data[3].id);		
			$(".pic25 img").attr("src",data[4].smlPic);
			$(".pic25 .movie-title").html(data[4].mvName);
			$(".pic25 .look a").attr("href","movmessage1?id="+data[4].id);
			$(".pic25 .buy a").attr("href","chooseseat1?id="+data[4].id);		
			$(".pic26 img").attr("src",data[5].smlPic);
			$(".pic26 .movie-title").html(data[5].mvName);
			$(".pic26 .look a").attr("href","movmessage1?id="+data[5].id);
			$(".pic26 .buy a").attr("href","chooseseat1?id="+data[5].id);		
			$(".pic27 img").attr("src",data[6].smlPic);
			$(".pic27 .movie-title").html(data[6].mvName);
			$(".pic27 .look a").attr("href","movmessage1?id="+data[6].id);
			$(".pic27 .buy a").attr("href","chooseseat1?id="+data[6].id);		
			$(".pic28 img").attr("src",data[7].smlPic);
			$(".pic28 .movie-title").html(data[7].mvName);
			$(".pic28 .look a").attr("href","movmessage1?id="+data[7].id);
			$(".pic28 .buy a").attr("href","chooseseat1?id="+data[7].id);		
			$(".pic29 img").attr("src",data[8].smlPic);
			$(".pic29 .movie-title").html(data[8].mvName);
			$(".pic29 .look a").attr("href","movmessage1?id="+data[8].id);
			$(".pic29 .buy a").attr("href","chooseseat1?id="+data[8].id);		
			$(".pic210 img").attr("src",data[9].smlPic);
			$(".pic210 .movie-title").html(data[9].mvName);
			$(".pic210 .look a").attr("href","movmessage1?id="+data[9].id);
			$(".pic210 .buy a").attr("href","chooseseat1?id="+data[9].id);		
			$(".pic211 img").attr("src",data[10].smlPic);
			$(".pic211 .movie-title").html(data[10].mvName);
			$(".pic211 .look a").attr("href","movmessage1?id="+data[10].id);
			$(".pic211 .buy a").attr("href","chooseseat1?id="+data[10].id);		
		}
	});
	//爱情电影
	$.ajax({
		url:'mainLovemv',
		type:'post',
		dataType:'json',
		success:function(data){
			$(".lovemv-pic-ul li").each(function(index,el){
				$(el).find("img").attr("src",data[index].smlPic);
				$(el).find("div:first").html(data[index].mvName);
				$(el).find(".look a").attr("href","movmessage1?id="+data[index].id);
				$(el).find(".buy a").attr("href","chooseseat1?id="+data[index].id);
			});
		}
	});
	//喜剧电影
	$.ajax({
		url:'mainXijumv',
		type:'post',
		dataType:'json',
		success:function(data){
			$(".xijumv li").each(function(index,el){
				$(el).find("img").attr("src",data[index].smlPic);
				$(el).find("div:first").html(data[index].mvName);
				$(el).find(".look a").attr("href","movmessage1?id="+data[index].id);
				$(el).find(".buy a").attr("href","chooseseat1?id="+data[index].id);
			});
		}
	});
});