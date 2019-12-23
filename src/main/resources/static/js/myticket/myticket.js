$(function() {
	//获取滚动条高度
	$(function() {
		var height1 = $(document).height();
		var height2 = $(window).height();
		$(".cover").css({height: height1 + 'px'});
		$(".user-profile-nav").css({height: (height2-100) + 'px'});
	})

var order = new Vue({
	el:'.content',
	data:{
		AllOrder:[]
	}
});
	doGetOrder(order);

});

function doGetOrder(order){
	var url = "order/findOrders";
	var userId = 7;               //动态获取用户id
	var params = {"userId":userId};
	$.post(url,params,function (result) {
		$.each(result.data,function (index,value) {
			var orderTime = value.orderTime;
			var sceneTime = value.sceneTime;
			value.orderTime = new Date(orderTime).toLocaleString();
			value.sceneTime = new Date(sceneTime).toLocaleString();
			var seatplus = value.seatId.split(",");
			for(var i = 0;i<seatplus.length;i++) {
				var lie = seatplus[i] % 10;
				var pai = 0;
				if (lie != 0) pai = (seatplus[i] - lie) / 10 + 1;
				if (lie == 0) {
					pai = seatplus[i] / 10;
					lie = 10;
				}
				seatplus[i] = pai+"排"+lie+"座"
			}
			value.seatId = seatplus;
			value.id = 1043926+value.id;
		});
		order.AllOrder = result.data;
		console.log(order.AllOrder)
	});
}