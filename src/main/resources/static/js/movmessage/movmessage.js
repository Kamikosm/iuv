$(function () {

    var parent = 0;
    var root = 0;

    //首页轮播图页面跳转电影详情页面
    $(function() {
        var lbName = sessionStorage.getItem("lbName");
        var url = "lbMvMsg";
        var params = {"lbName":lbName};

		$.post(url,params,function(result){
			MovMsg(result);
		});
	}

	//首页电影跳转电影详情
	function mvOMsg() {
		var mvName = sessionStorage.getItem("mvName");
		var url = "MvMsg";
		var params = {"mvName":mvName};

		$.post(url,params,function(result){
			MovMsg(result);
		});
	}

	//Ajax-评论相关	@author houke_zou
	var getcomment = "user/getcomment";
	var addcomment = "user/addcomment";


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
            }else{
                alert("错误");
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
        debugger;
        root = 0;
        debugger;
    });

    $(".reply-3").click(function(){
        parent = $(this).parent().parent().prev().attr("id");
        debugger;
        root = $(this).attr("id");
        debugger;

    });



















    //遮罩层获取滚动条高度
    $(function () {
        var height1 = $(document).height();
        $(".cover").css({height: height1 + 'px'});
    })
    //年月日格式
    $(function () {
        function BuZero(obj) {
            if (obj < 10) return "0" + obj;
            else return obj;
        }

		var myDate = new Date();
		var year = myDate.getFullYear();
		var mon = myDate.getMonth() + 1;
		var date = myDate.getDate();
		var h = myDate.getHours();
		var m = myDate.getMinutes();
		var riqi = BuZero(year) + "年" + BuZero(mon) + "月" + BuZero(date) + "日";
		var shijian = BuZero(h) + ":" + BuZero(m);
		$(".comTime").html(riqi + " " + shijian);
	})
});

Date.prototype.format = function (fmt) {
	var o = {
			"M+": this.getMonth() + 1, //月份
			"d+": this.getDate(), //日
			"h+": this.getHours(), //小时
			"m+": this.getMinutes(), //分
			"s+": this.getSeconds(), //秒
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度
			"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
}


//电影详情
function MovMsg(cmnResult) {
	$(".middle-left img").attr("src",cmnResult[0].bigPic);
	$(".movie-text h3").html(cmnResult[0].mvName);
	$(".movie-text .ellipsis1").html("类型："+cmnResult[0].type);
	$(".movie-text .ellipsis2").html("时长："+cmnResult[0].mvTime);
	$(".movie-text .ellipsis3").html("上映时间："+cmnResult[0].startTime);
	$(".movie-score .index-left").html(cmnResult[0].score);
	$(".movie-score .stonefont").html(cmnResult[0].sum);
}