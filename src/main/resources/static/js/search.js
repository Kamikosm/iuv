$(function() {
	
	$.ajax({
		url:'searchController',
		type:'post',
		data:{'name':$(".head4 input[type='text']").val()},
		dataType:'json',
		success:function(data){
//			alert(data[1].mvName);
//			alert(data.length);
			$("#search_show").html("");
			for(var i=0;i<data.length;i++){
			$("#search_show").html(function(j,search){
				return search+
			"<div class='search_show2'>"+
			"<a href='movmessage1?id="+data[i].id+"'><img src="+data[i].bigPic+"></img> </a>"+
			"<div class='search_show2_div1'>"+
				"<p class='search_show2_div1_p1'>"+
					"<span id='search_show2_div1_p1_s1'>"+data[i].mvName+"</span>" +
					"<span id='search_show2_div1_p1_s2'> " +
					"<span class='search_show2_div1_p1_s1'>上映时间:</span>"+
					"<span class='search_show2_div1_p1_s2'>"+new Date(data[i].startTime).toLocaleDateString()+"</span>"+
					"</span>"+
				"</p>"+
				"<p class='search_show2_div1_p2'>"+
					"<span id='search_show2_div1_p2_s1'>主演: <span"+
						" class='search_show2_div1_p2_s1'>"+data[i].mvStar+"</span>"+
					"</span> <span id='search_show2_div1_p2_s2'> <span"+
						" class='search_show2_div1_p2_s2'>导演:</span> <span"+
						" class='search_show2_div1_p2_s3'>"+data[i].master+"</span>"+
					"</span>"+
				"</p>"+
				"<p class='search_show2_div1_p3'>"+
					"<span id='search_show2_div1_p3_s1'>类型: <span"+
						" class='search_show2_div1_p3_s1'>"+data[i].type+"</span>"+
					"</span> <span id='search_show2_div1_p3_s2'> <span"+
						" class='search_show2_div1_p3_s2'>地区:</span> <span"+
						" class='search_show2_div1_p3_s3'>"+data[i].area+"</span>"+
					"</span>"+
				"</p>"+
				"<div class='search_show2_div2'>"+data[i].mvMsg+"</div>"+
				"<div class='search_show2_div3'>"+
					"<a href='movmessage1?id="+data[i].id+"'>电影详情</a>"+
				"</div>"+
			"</div>"+
		"</div>"});
		}
		}
	});
	
	//顶端搜索更新数据(ajax处理)
	$(".head4 input[type='button']").click(function(){
		$.ajax({
			url:'searchController',
			type:'post',
			data:{'name':$(".head4 input[type='text']").val()},
			dataType:'json',
			success:function(data){
//				alert(data[1].mvName);
//				alert(data.length);
				$("#search_show").html("");
				for(var i=0;i<data.length;i++){
				$("#search_show").html(function(j,search){
					return search+
				"<div class='search_show2'>"+
				"<a href='movmessage1?id="+data[i].id+"'><img src="+data[i].bigPic+"></img> </a>"+
				"<div class='search_show2_div1'>"+
					"<p class='search_show2_div1_p1'>"+
						"<span id='search_show2_div1_p1_s1'>"+data[i].mvName+"</span>" +
						"<span id='search_show2_div1_p1_s2'> " +
						"<span class='search_show2_div1_p1_s1'>上映时间:</span>"+
						"<span class='search_show2_div1_p1_s2'>"+new Date(data[i].startTime).toLocaleDateString()+"</span>"+
						"</span>"+
					"</p>"+
					"<p class='search_show2_div1_p2'>"+
						"<span id='search_show2_div1_p2_s1'>主演: <span"+
							" class='search_show2_div1_p2_s1'>"+data[i].mvStar+"</span>"+
						"</span> <span id='search_show2_div1_p2_s2'> <span"+
							" class='search_show2_div1_p2_s2'>导演:</span> <span"+
							" class='search_show2_div1_p2_s3'>"+data[i].master+"</span>"+
						"</span>"+
					"</p>"+
					"<p class='search_show2_div1_p3'>"+
						"<span id='search_show2_div1_p3_s1'>类型: <span"+
							" class='search_show2_div1_p3_s1'>"+data[i].type+"</span>"+
						"</span> <span id='search_show2_div1_p3_s2'> <span"+
							" class='search_show2_div1_p3_s2'>地区:</span> <span"+
							" class='search_show2_div1_p3_s3'>"+data[i].area+"</span>"+
						"</span>"+
					"</p>"+
					"<div class='search_show2_div2'>"+data[i].mvMsg+"</div>"+
					"<div class='search_show2_div3'>"+
						"<a href='movmessage1?id="+data[i].id+"'>电影详情</a>"+
					"</div>"+
				"</div>"+
			"</div>"});
			}
			}
		});
	});
	
	
	
	//搜索更新数据(ajax处理)
	$(".search3 input[type='button']").click(function(){
		$.ajax({
			url:'searchController',
			type:'post',
			data:{'name':$(".search3 input[type='text']").val()},
			dataType:'json',
			success:function(data){
//				alert(data[1].mvName);
//				alert(data.length);
				$("#search_show").html("");
				for(var i=0;i<data.length;i++){
				$("#search_show").html(function(j,search){
					return search+
				"<div class='search_show2'>"+
				"<a href='movmessage1?id="+data[i].id+"'><img src="+data[i].bigPic+"></img> </a>"+
				"<div class='search_show2_div1'>"+
					"<p class='search_show2_div1_p1'>"+
						"<span id='search_show2_div1_p1_s1'>"+data[i].mvName+"</span>" +
						"<span id='search_show2_div1_p1_s2'> " +
						"<span class='search_show2_div1_p1_s1'>上映时间:</span>"+
						"<span class='search_show2_div1_p1_s2'>"+new Date(data[i].startTime).toLocaleDateString()+"</span>"+
						"</span>"+
					"</p>"+
					"<p class='search_show2_div1_p2'>"+
						"<span id='search_show2_div1_p2_s1'>主演: <span"+
							" class='search_show2_div1_p2_s1'>"+data[i].mvStar+"</span>"+
						"</span> <span id='search_show2_div1_p2_s2'> <span"+
							" class='search_show2_div1_p2_s2'>导演:</span> <span"+
							" class='search_show2_div1_p2_s3'>"+data[i].master+"</span>"+
						"</span>"+
					"</p>"+
					"<p class='search_show2_div1_p3'>"+
						"<span id='search_show2_div1_p3_s1'>类型: <span"+
							" class='search_show2_div1_p3_s1'>"+data[i].type+"</span>"+
						"</span> <span id='search_show2_div1_p3_s2'> <span"+
							" class='search_show2_div1_p3_s2'>地区:</span> <span"+
							" class='search_show2_div1_p3_s3'>"+data[i].area+"</span>"+
						"</span>"+
					"</p>"+
					"<div class='search_show2_div2'>"+data[i].mvMsg+"</div>"+
					"<div class='search_show2_div3'>"+
						"<a href='movmessage1?id="+data[i].id+"'>电影详情</a>"+
					"</div>"+
				"</div>"+
			"</div>"});
			}
			}
		});
	});
});