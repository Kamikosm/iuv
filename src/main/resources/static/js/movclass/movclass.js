$(function() {

	var numkey = sessionStorage.getItem("numkey");

	if(numkey == "3") {
		//查看全部热映电影跳转电影详情
		$.ajax({
			url:'hotMvMsg',
			type:'post',
			dataType:'json',
			success:function(data){
				msgDiv(data);
			}
		});
		sessionStorage.setItem("numkey","0");
	} else if(numkey == "5") {
		//查看全部即将上映电影跳转电影详情
		$.ajax({
			url:'timeMvMsg',
			type:'post',
			dataType:'json',
			success:function(data){
				msgDiv(data);
			}
		});
		sessionStorage.setItem("numkey","0");
	} 

	var type1 = sessionStorage.getItem("type");
	var url1 = "mainMvClass";
	var params1 = {"type":type1};

	//导航条分类跳转电影分类
	$.post(url1,params1,function(result){
		console.log(result);
		msgDiv(result);
	});
	
	function msgDiv(cmnresult) {
		for(var i=0; i<cmnresult.length; i++){

			$(".movclass_div2").html(function(j,search){
				var score = (cmnresult[i].score).toFixed(1);
				return search+
				"<div class='movclass_div2_div1'>"+
				"<a href=''>" +
				"<img src="+cmnresult[i].smlPic+"></img>" +
				"</a>"+
				"<div class='movclass_div2_yel'>" +
				"<p class='movclass_div2_div1_p1'>"+
				"<a>"+cmnresult[i].mvName+"</a>"+
				"</p>"+
				"<p class='movclass_div2_div1_p2'>"+score+"</p>"+
				"</div>"+
				"</div>"
			});
		}
	}
});