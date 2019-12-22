$(function() {
	//获取滚动条高度
	$(function() {
		var height1 = $(document).height();
		var height2 = $(window).height();
		$(".cover").css({height: height1 + 'px'});
		$(".user-profile-nav").css({height: (height2-100) + 'px'});
	})


});