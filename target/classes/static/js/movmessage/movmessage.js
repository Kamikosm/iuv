$(function () {

	//Ajax-评论相关	@author houke_zou

	var getcomment = "user/getcomment";

	$.ajax({
		url:getcomment,
		type:'POST',
		contentType:false,
		processData:false,
		cache:false,
		dataType:"json",
		success:function(data){
			if(data.success){
			    var list = data.objectList;
                alert("德玛西亚");
				for(var i = 0 ; i < list.length; i++){

				    if(list[i].parent==null){
                        var unitComment1 =
                            "<div id="+list[i].id+" class='comment1'>" +
                            "<div class='cursor'><img/>" +
                            "</div><p class='comUser cursor'>"+list[i].username+"</p>" +
                            "<p class='comTime'>"+list[i].commentTime+"</p>" +
                            "<div class='pinglun'>"+list[i].content+"</div>" +
                            "<div class=\"pinglun-p\">\n" +
                            "<p class=\"pinglun-p1 cursor\">13087345445</p>\n" +
                            "<p class=\"pinglun-p2\">等人</p>\n" +
                            "<p class=\"pinglun-p3 cursor\">共4条回复</p>\n" +
                            "<p class=\"pinglun-p4 cursor\">回复</p>\n" +
                            "<p class=\"pinglun-p5\">|</p>\n" +
                            "<p class=\"pinglun-p6\">\n" +
                            "<img src=\"img/dianzan1.png\" class=\"cursor\" />\n" +
                            "<div class=\"pinglun-p-div\">189</div>\n" +
                            "</p>\n" +
                            "</div>" +
                            "<div class='lzl-div'></div>" +
                            "</div>";
                        $(".comment-lzl").append(unitComment1);
                    }else{


                        var id_1 = '#' +list[i].root;
                        var id_2 = '#' + list[i].parent;

                        var commentLzl =
                            "<div id="+list[i].id+" class='lzl-div1'>" +
                            "<span class='cursor'>"+list[i].username+"</span>" +
                            "<span>:</span>" +
                            "<span>回复</span>" +
                            "<span class='cursor'>"+list[i].parent+"</span>" +
                            "<span>:</span>" +
                            "<span>"+list[i].content+"</span>" +
                            "<ul class='lzl-div1-1'>" +
                            "<li class='lzl-time'>2019-10-24 21:20:55</li>" +
                            "<li class='lzl-div-p2 cursor'>回复</li>" +
                            "<li class='lzl-div-p3'>|</li>" +
                            "<li class='lzl-div-p4'>" +
                            "<img src='img/dianzan.png' class='cursor' />" +
                            "<li class='lzl-p4-div'>24</li>" +
                            "</li>" +
                            "</ul>" +
                            "</div>"

                        if(id_1 == id_2){
                            $(id_1).find(".lzl-div").append(commentLzl);
                        }else{
                            $(id_2).after(commentLzl);
                        }


                    }


                }


			}else{
				alert("错误");
			}
		}
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