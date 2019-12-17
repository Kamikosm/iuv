$(function(){
	$.ajax({
		url:'movie/selectmyticket',
		type:'post',
		dataType:'json',
		success:function(data){
			for(var i=0;i<data.length;i++){
				if(data[i].seatId1!=0){
					if(data[i].seatId1%10!=0)
						seat1 = (parseInt(data[i].seatId1/10)+1)+"排"+(data[i].seatId1%10)+"座";
					else
						seat1 = (parseInt(data[i].seatId1/10))+"排10座";
				}
				else
					seat1 ="";
				if(data[i].seatId2!=0){
					if(data[i].seatId2%10!=0)
						seat2 = (parseInt(data[i].seatId2/10)+1)+"排"+(data[i].seatId2%10)+"座";
					else
						seat2 = (parseInt(data[i].seatId2/10))+"排10座";
				}
				else
					seat2 ="";
				if(data[i].seatId3!=0){
					if(data[i].seatId3%10!=0)
						seat3 = (parseInt(data[i].seatId3/10)+1)+"排"+(data[i].seatId3%10)+"座";
					else
						seat3 = (parseInt(data[i].seatId3/10))+"排10座";
				}
				else
					seat3 ="";
				if(data[i].seatId4!=0){
					if(data[i].seatId4%10!=0)
						seat4 = (parseInt(data[i].seatId4/10)+1)+"排"+(data[i].seatId4%10)+"座";
					else
						seat4 = (parseInt(data[i].seatId4/10))+"排10座";
				}
				else
					seat4 ="";
				if(data[i].seatId5!=0){
					if(data[i].seatId5%10!=0)
						seat5 = (parseInt(data[i].seatId5/10)+1)+"排"+(data[i].seatId5%10)+"座";
					else
						seat5 = (parseInt(data[i].seatId5/10))+"排10座";
				}
				else
					seat5 ="";
				if(data[i].seatId6!=0){
					if(data[i].seatId6%10!=0)
						seat6 = (parseInt(data[i].seatId6/10)+1)+"排"+(data[i].seatId6%10)+"座";
					else
						seat6 = (parseInt(data[i].seatId6/10))+"排10座";
				}
				else
					seat6 ="";
				$(".orders-controller").html(function(j,search){
					return search+
					"<div class='order-header'>"+
					"<span class='order-date'>"+new Date(data[i].orderTime).format("yyyy-MM-dd")+"</span> <span class='order-id'>iuv订单号:21018737997</span>"+
					"</div>"+
					"<div class='order-body'>"+
					"<div class='poster'>"+
					"<img src='img/pkq.jpg' />"+
					"</div>"+
					"<div class='order-content'>"+
					"<div class='movie-name'>"+
					"<"+data[i].mvName+">"+
					"</div>"+
					"<div class='cinema-name'>iuv电影院(长沙店)</div>"+
					"<div class='hall-ticket'>"+
					"<span>"+seat1+"</span> "+
					"<span>"+seat2+"</span> "+
					"<span>"+seat3+"</span> "+
					"<span>"+seat4+"</span> "+
					"<span>"+seat5+"</span> "+
					"<span>"+seat6+"</span> "+
					"</div>"+
					"<div class='show-time'>"+new Date(data[i].orderTime).format("yyyy-MM-dd hh:mm:ss")+"</div>"+
					"</div>"+
					"<div class='order-price'>¥"+data[i].price+"</div>"+
					"<div class='order-status'>已完成</div>"+
					"<div class='actions'>"+
					"<div>"+
					"<a class='order-detail' href='' data-act='orders-datail-cick' data-bid='#'>查看详情</a>"+
					"</div>"+
					"</div>"+
				"</div>"});
			}
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