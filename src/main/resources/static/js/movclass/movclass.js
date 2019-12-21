$(function() {
	//初始化页面(ajax操作)
	$.ajax({
		url:'movclassType',
		type:'post',
		data:{'type':"爱情"},
		dataType:'json',
		success:function(data){
			$(".movclass_div2").html("");
			for(var i=0;i<data.length;i++){
				$(".movclass_div2").html(function(j,search){
					return search+
					"<div class='movclass_div2_div1'>"+
					"<a href='movmessage1?id="+data[i].id+"'><img src="+data[i].smlPic+"></img> </a>"+
					"<div class='movclass_div2_yel'>"+
					"<p class='movclass_div2_div1_p1'>"+
					"<a href='movmessage1?id="+data[i].id+"'>"+data[i].mvName+"</a>"+
					"</p>"+
					"<p class='movclass_div2_div1_p2'>"+data[i].score+"</p>"+
					"</div>"+
					"</div>"
				});
			}
		}
	});

	//导航条分类更新数据(ajax处理)
	$(".search_a2").click(function(){
		$.ajax({
			url:'movclassType',
			type:'post',
			data:{'type':$(this).html()},
			dataType:'json',
			success:function(data){
				$(".movclass_div2").html("");
				for(var i=0;i<data.length;i++){
					$(".movclass_div2").html(function(j,search){
						return search+
						"<div class='movclass_div2_div1'>"+
						"<a href='movmessage1?id="+data[i].id+"'><img src="+data[i].smlPic+"></img> </a>"+
						"<div class='movclass_div2_yel'>"+
						"<p class='movclass_div2_div1_p1'>"+
						"<a href='movmessage1?id="+data[i].id+"'>"+data[i].mvName+"</a>"+
						"</p>"+
						"<p class='movclass_div2_div1_p2'>"+data[i].score+"</p>"+
						"</div>"+
						"</div>"
					});
				}
			}
		});
	});
	
	//首页跳转
	$(".search_l1").click(function(){
		  $(".shouye").attr("href","main");
	});
});