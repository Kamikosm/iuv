window.onload = function() {
	var imgs = ["lb/lb_pic1.png","lb/lb_pic2.png","lb/lb_pic3.png","lb/lb_pic4.png","lb/lb_pic5.png","lb/lb_pic6.png","lb/lb_pic7.png","lb/lb_pic8.png"];
    var rgbs = ["rgb(200,136,143)","rgb(234,237,242)","rgb(211,159,105)","rgb(169,157,146)","rgb(112,66,41)","rgb(173,181,167)","rgb(99,140,120)","rgb(222,190,141)"]; 
	//电影背景图
	var img = document.getElementById("menu-img");
	//纯色背景图
	var menu = document.getElementById("menu");
	//所有的小圆点li标签
	var dot = document.getElementById("menu-dots").getElementsByTagName("li");
	//所有的排行榜li标签
	var rank = document.getElementById("rank-dots").getElementsByTagName("li");
	
	var x = 0;
	var href = [2,33,32,5,1,25,18,40];
	//自动播放
	function play() {
		lunbo = setInterval(function() {
			x++;
			if(x == dot.length) {
				x=0;
			}
			img.src = "./img/"+imgs[x];
			$(".lunbohref").attr("href","movmessage1?id="+href[x]);
			menu.style.background = rgbs[x];
			
			//遍历下标
			for (var i=0; i<dot.length; i++) {
				if (i==x) {
					dot[x].id = "menu-dot";
					rank[x].id = "rank-dot";
					var rankps = rank[x].getElementsByTagName("p");
					rankps[0].className = "rank1";
					rankps[1].className = "rank2";
				} else{
					dot[i].id = "";
					rank[i].id = "";
					var rankps = rank[i].getElementsByTagName("p");
					rankps[0].className = "";
					rankps[1].className = "";
				}
			}
		},3000);
	};
	
	//停止自动播放
	function stop() {
		clearTimeout(lunbo);
	};
	
	play();
	
	//鼠标点击事件
	for(var i=0; i<dot.length; i++) {
		dot[i].is = i;
		rank[i].is = i;
		rank[i].onmouseover = function() {
			stop();
			for(var i=0; i<dot.length; i++) {
				if(i == this.is) {
					img.src = "./img/"+imgs[i];
					$(".lunbohref").attr("href","movmessage1?id="+href[i]);
					menu.style.background = rgbs[i];
					index = dot[i].is;
					dot[this.is].id = "menu-dot";
					rank[this.is].id = "rank-dot";
					var rankps = rank[this.is].getElementsByTagName("p");
					rankps[0].className = "rank1";
					rankps[1].className = "rank2";
					x=i;
				} else {
					dot[i].id = "";
					rank[i].id = "";
					var rankps = rank[i].getElementsByTagName("p");
					rankps[0].className = "";
					rankps[1].className = "";
				};
			};
		}
		rank[i].onmouseout = function() {		
			play();
		}
		dot[i].onclick = function() {			
			for(var i=0; i<dot.length; i++) {
				if(i == this.is) {
					img.src = "./img/"+imgs[i];
					$(".lunbohref").attr("href","movmessage1?id="+href[i]);
					menu.style.background = rgbs[i];
					index = dot[i].is;
					dot[this.is].id = "menu-dot";
					rank[this.is].id = "rank-dot";
					var rankps = rank[this.is].getElementsByTagName("p");
					rankps[0].className = "rank1";
					rankps[1].className = "rank2";
					x=i;
				} else {
					dot[i].id = "";
					rank[i].id = "";
					var rankps = rank[i].getElementsByTagName("p");
					rankps[0].className = "";
					rankps[1].className = "";
				};
			};
		};
	};
	xuanting();
};