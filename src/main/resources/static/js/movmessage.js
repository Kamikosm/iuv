$(function() {
	$.ajax({
		url: 'movmessageController',
		type: 'post',
		dataType: 'json',
		success: function(data) {
			$(".name").html(data.mvName);
			$(".ellipsis1").html("类型： " + data.type);
			$(".ellipsis2").html("时长： " + data.mvTime + "分钟");
			$(".ellipsis3").html(new Date(data.startTime).toLocaleDateString() + " " + "上映");
			$(".index-left").html(data.score);
			$(".stonefont").html(data.sum);
			$(".context").html(data.message);
			$(".middle-left").css("background", "url(" + data.bigPic + ")");
			$(".buy").attr("href", "chooseseat1?id=" + data.id);
		}
	});
	//评分
	$.fn.raty.defaults.path = 'img/';
	$('#function-demo').raty({
		number: 3,
		targetType: 'hint',
		path: 'img/',
		hints: ['差', '一般', '好'],
		cancelOff: 'cancel-off-big.png',
		cancelOn: 'cancel-on-big.png',
		size: 24,
		starHalf: 'star-half-big.png',
		starOff: 'star-off-big.png',
		starOn: 'star-on-big.png',
		target: '#function-hint',
		cancel: false,
		targetKeep: true,
		targetText: '请评分!',
		//参数
		click: function(score) {
			alert("score:" + score);
		}
	});
	$(function() {
		function BuZero(obj) {
			if(obj < 10) return "0"+obj;
			else return obj;
		}
		var myDate = new Date();
		var year = myDate.getFullYear(); 
		var mon = myDate.getMonth() + 1; 
		var date = myDate.getDate(); 
		var h = myDate.getHours();
		var m = myDate.getMinutes();
		var riqi = BuZero(year)+"年"+BuZero(mon)+"月"+BuZero(date)+"日";
		var shijian = BuZero(h)+":"+BuZero(m);
		$(".comTime").html(riqi +" "+ shijian);
	})
	$(".commentbt").click(function(){
		$.ajax({
			url:'hello',
			type:'post',
			dataType:'json',
			success:function(data){
				if(data.test==false){
					swal("请先登录","登录成功后,您可顺利购票!","warning");
				}
				else { 
					var url = 'comment/doSave';
					var comment = $('textarea').val();
					var param = {'comment':comment};
					$.post(url,param,function(result){
					});
					location.reload();
				}
			}
		});
		
	});
	var url = "comment/doSelectAll";
	$.getJSON(url,function(result){
		for(var i=0;i<result.data.length;i++){
			$("#comment").html(function(j,search){
				return search+
				"<div class='comment1'>" +
					"<div class='toux'>" + "<img src='' />"
							+"</div>" + "<p class='comUser'>"+result.data[i].name+"</p>"+
							"<p class='comTime'>"+new Date(result.data[i].time).format("yyyy-MM-dd hh:mm:ss")+"</p>"+
							"<div class='pinglun'>"+result.data[i].comment+"</div>"
					+"</div>"
			});
		}
	});
});

Date.prototype.format = function(fmt) { 
	var o = { 
			"M+" : this.getMonth()+1,                 //月份 
			"d+" : this.getDate(),                    //日 
			"h+" : this.getHours(),                   //小时 
			"m+" : this.getMinutes(),                 //分 
			"s+" : this.getSeconds(),                 //秒 
			"q+" : Math.floor((this.getMonth()+3)/3), //季度 
			"S"  : this.getMilliseconds()             //毫秒 
	}; 
	if(/(y+)/.test(fmt)) {
		fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
	}
	for(var k in o) {
		if(new RegExp("("+ k +")").test(fmt)){
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
		}
	}
	return fmt; 
}
