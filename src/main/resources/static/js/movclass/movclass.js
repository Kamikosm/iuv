$(
	//首页导航条页面跳转电影分类页面
	function() {
		var type = sessionStorage.getItem("type");
		var url = "mainMvClass";
		var params = {"type":type};

		$.post(url,params,function(result){
			for(var i=0; i<result.length; i++){
				$(".movclass_div2").html(function(j,search){
					return search+
						"<div class='movclass_div2_div1'>"+
						"<a href=''>" +
						"<img src="+result[i].smlPic+"></img>" +
						"</a>"+
						"<div class='movclass_div2_yel'>" +
						"<p class='movclass_div2_div1_p1'>"+
						"<a href=''>"+result[i].mvName+"</a>"+
						"</p>"+
						"<p class='movclass_div2_div1_p2'>"+result[i].score+"</p>"+
						"</div>"+
						"</div>"
				});
			}
		});
	}

);