$(function () {
	
	var parent = 0;
	var root = 0;
	
	var numkey = sessionStorage.getItem("numkey");
	if(numkey == "1") {
		lbOMsg();  //首页轮播图页面跳转电影详情页面
		numkey == "0";
	} else if (numkey == "2") {
		mvOMsg();  //首页电影跳转电影详情评论
		numkey == "0";
	} else if (numkey == "4") {
		mvOSeat();  //首页电影跳转电影详情选座
		
		numkey == "0";
	}

//	遮罩层获取滚动条高度
	$(function () {
		var height1 = $(document).height();
		$(".cover").css({"height": height1+200+ 'px'});
	})
	
	//首页轮播图页面跳转电影详情页面
	function lbOMsg() {
		var lbName = sessionStorage.getItem("mvName");
		var url = "lbMvMsg";
		var params = {"mvName":lbName};

		$(".btm-tab-title>a:nth-child(1)").css({
			"font-weight": "bold",
			"color": "rgb(50,50,50)"
		});
		
		$.post(url,params,function(result){
			MovMsg(result);
			sessionStorage.setItem("movieId",result[0].id);
//			console.log(result[0].id);
		});
	}
	
	//首页电影跳转电影详情选座
	function mvOSeat() {
		var mvName = sessionStorage.getItem("mvName");
		var url1 = "mvMsgSeat";
		var url2 = "MvMsg";
		var params = {"mvName":mvName};

		$(".ajaxContent").load("msgseat");

		$(".btm-tab-title>a:nth-child(2)").css({
			"font-weight": "bold",
			"color": "rgb(50,50,50)"
		});

		//添加场次月日
		$.post(url1,params,function(result){

			for(var i=0; i<result.length; i++) {
				if(i == 0) {
					var date = new Date(result[i].sceneTime);
					var month = date.getMonth()+1;
					var day = date.getDate();
					var weekArray = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
					var week = weekArray[date.getDay()];
					var mvMsgSeat = "<span class='cursor'>"+week+" "+month+"月"+day+"号"+"</span>";

					//动态添加放映月日
					$(".seeTime").find("span:first").after(mvMsgSeat);

				} else {
					var date11 = new Date(result[i-1].sceneTime);
					var day11 = date11.getDate();
					var date = new Date(result[i].sceneTime);
					var month = date.getMonth()+1;
					var day = date.getDate();
					var weekArray = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
					var week = weekArray[date.getDay()];
					var mvMsgSeat = "<span class='cursor'>"+week+" "+month+"月"+day+"号"+"</span>";

					if(day == day11) {
						continue;
					}
					//动态添加放映月日
					$(".seeTime").find("span:first").after(mvMsgSeat);
				}	
			}
			//默认对第一个日期添加按钮
			$(".seeTime").find("span").eq(1).addClass("yelbtn");
			//页面上半部分电影信息呈现
			$.post(url2,params,function(result){
				MovMsg(result);
				sessionStorage.setItem("movieId",result[0].id);
//				console.log(result[0].id);
			});
			//对月日按钮做点击事件
			$(".seeTime span").click(function(){
				$(".seeTime span").removeClass("yelbtn");
				$(this).addClass("yelbtn");

				var scTime = $(this).text();
				var getMonth = scTime.substring(scTime.indexOf(" ")+1, scTime.indexOf("月"));
				var getDay = scTime.substring(scTime.indexOf("月")+1, scTime.indexOf("号"));

				$(".mvContent").remove();

				$.ajax({
					url:'msgYearDay',
					type:'post',
					dataType:'json',
					data:{"mvName":mvName,"movYear":getMonth,"movDay":getDay},
					success:function(result){

						for(var i=0; i<result.length; i++) {

							var date = new Date(result[i].sceneTime);
							var hourc = date.getHours();
							var hour = "" + hourc;
							if(hour.length == 1){
								hour = "0" + hour;
							}
							var minutec = date.getMinutes();
							var minute = "" + minutec;
							if(minute.length == 1){
								minute = "0" + minute;
							}
							//动态添加电影场次
							var mvMsgScene = "<div class='mvContent'>"+
							"<span>"+hour+":"+minute+"</span>"+
							"<span>"+result[i].hall+"号厅</span>"+
							"<span></span><p class='sceneId'>"+result[i].id+"</p>"+
							"<span class='cursor'>选座购票</span></div>";

							$(".startTime").after(mvMsgScene);
						}
						
						$(".mvContent span").click(function(){
							var sceneId = $(this).parent().find("p").text();
							sessionStorage.setItem("sceneId",sceneId);
							window.location.href = "ChooseSeat";
						});
						
						//页面上半部分电影信息呈现
						$.post(url2,params,function(result){
							mvPrice(result);
						});
					}
				});
			});
		});
	}

	function mvPrice(result){
		//填写售价
		$(".mvContent").each(function(index,el){
			$(".mvContent").eq(index).find("span").eq(2).html("￥"+result[0].price+".0");
		});
	}

	//首页电影跳转电影详情评论
	function mvOMsg() {
		var mvName = sessionStorage.getItem("mvName");
		var url = "MvMsg";
		var params = {"mvName":mvName};

		//Ajax-评论相关	@author houke_zou
		var getcomment = "user/getcomment";
		var addcomment = "user/addcomment";

		//电影基本信息呈现
		$.post(url,params,function(result){
			MovMsg(result);
			sessionStorage.setItem("movieId",result[0].id);
//			console.log(result[0].id);
		});

		$(".btm-tab-title>a:nth-child(1)").css({
			"font-weight": "bold",
			"color": "rgb(50,50,50)"
		})

		//获取评论
		$.ajax({
			url:getcomment,
			type:'POST',
			contentType:false,
			processData:false,
			cache:false,
			async:false,
			dataType:"json",
			success:function(data){
				if(data.success){
					var list = data.objectList;
					for(var i = 0 ; i < list.length; i++){
						if(list[i].parent==null){
							var unitComment1 =  "<div id="+list[i].id+" class='comment1'>" +
							"<div class='cursor'><img/>" +
							"</div><p class='comUser cursor'>"+list[i].username+"</p>" +
							"<p class='comTime'>"+list[i].datetime+"</p>" +
							"<div class='pinglun'>"+list[i].content+"</div>" +
							"<div class='pinglun-p'>" +
							"<p class='pinglun-p1 cursor'>13087345445</p>\n" +
							"<p class='pinglun-p2'>等人</p>\n" +
							"<p class='pinglun-p3 cursor'>共4条回复</p>\n" +
							"<p class='pinglun-p4 cursor reply-2'>回复" +
							"<span class='parent' style='display: none'>"+list[i].id+"</span>" +
							"<span class='root' style='display: none'>"+list[i].root+"</span>" +
							"</p>\n" +
							"<p class='pinglun-p5'>|</p><p class='pinglun-p6'>\n" +
							"<img src='img/dianzan1.png' class='cursor' />" +
							"<div class='pinglun-p-div'>189</div>" +
							"</p></div><div class='lzl-div'></div></div>";

							$(".comment-lzl").append(unitComment1);
						}else{

							var id_1 = '#' +list[i].root;
							var id_2 = '#' + list[i].parent;
							var commentLzl ="<div id="+list[i].id+" class='lzl-div1'>" +
							"<span class='cursor'>"+list[i].username+"</span>" +
							"<span>:</span><span>回复</span>" +
							"<span class='cursor'>"+list[i].parentname+"</span>" +
							"<span>:</span><span>"+list[i].content+"</span>" +
							"<ul class='lzl-div1-1'>" +
							"<li class='lzl-time'>"+list[i].datetime+"</li>" +
							"<li class='lzl-div-p2 cursor reply-3' id ='"+list[i].root+"'>回复" +
							"<span id = 'root-id' style='display: none'>"+list[i].root+"</span>" +
							"</li>" +
							"<li class='lzl-div-p3'>|</li>" +
							"<li class='lzl-div-p4'>" +
							"<img src='img/dianzan.png' class='cursor' />" +
							"<li class='lzl-p4-div'>24</li>" +
							"</li></ul></div>";

							if(id_1 == id_2){
								$(id_1).find(".lzl-div").append(commentLzl);
							}else{
								$(id_1).find(".lzl-div").append(commentLzl);
							}
						}
					}
				}
			}
		});

		//发布评论
		$('.commentbt').click(function(){
			var content = $('#textArea').val();
			var formData = new FormData();
			formData.append("parent",parent);
			formData.append("content",content);
			formData.append("root",root);
			$.ajax({
				url:addcomment,
				type:'POST',
				data: formData,
				contentType:false,
				processData:false,
				cache:false,
				async:false,
				dataType:"json",
				success:function(data){
					if(data.success){
						alert("评论成功");
						window.location.href="http://localhost/movmessage";
					}else{
						alert("评论失败！")
					}
				}
			});

		});

		$(".reply-2").click(function(){
			parent = $(this).parent().parent().prev().attr("id");
			root = 0;
		});

		$(".reply-3").click(function(){
			parent = $(this).attr("id");
			root = $(this).attr("id");
		});

	}

//	电影详情
	function MovMsg(cmnResult) {
		var date1 = new Date(cmnResult[0].startTime).toJSON();
		var date2 = new Date(+new Date(date1)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
		var date = new Date(date2).toLocaleDateString();

		$(".middle-left img").attr("src",cmnResult[0].bigPic);
		$(".movie-text h3").html(cmnResult[0].mvName);
		$(".movie-text .ellipsis1").html("类型："+cmnResult[0].type);
		$(".movie-text .ellipsis2").html("时长："+cmnResult[0].mvTime+"分钟");
		$(".movie-text .ellipsis3").html("上映时间："+date);
		$(".context").html(cmnResult[0].message);
		$(".movie-score .index-left").html(cmnResult[0].score);
		$(".movie-score .stonefont").html(cmnResult[0].sum);
	}
});
