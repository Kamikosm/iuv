$(
		//首页导航条页面跳转电影分类页面
		function() {
			var type1 = sessionStorage.getItem("type");
			var url1 = "mainMvClass";
			var params1 = {"type":type1};

			$.post(url1,params1,function(result){
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

			//查看全部热映电影跳转电影详情
			$.ajax({
				url:'hotMvMsg',
				type:'post',
				dataType:'json',
				success:function(data){
					console.log(data[0].id);
					for(var i=0; i<data.length; i++){
						$(".movclass_div2").html(function(j,search){
							return search+
							"<div class='movclass_div2_div1'>"+
							"<a href=''>" +
							"<img src="+data[i].smlPic+"></img>" +
							"</a>"+
							"<div class='movclass_div2_yel'>" +
							"<p class='movclass_div2_div1_p1'>"+
							"<a href=''>"+data[i].mvName+"</a>"+
							"</p>"+
							"<p class='movclass_div2_div1_p2'>"+data[i].score+"</p>"+
							"</div>"+
							"</div>"
						});
					}
				}
			});

		}
);