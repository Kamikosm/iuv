//导航条悬停事件
function xuanting() {
    var xxx=document.getElementsByClassName("a1");
    for(i=0;i<xxx.length;i++)
    xxx[i].onmouseover =
    function(){
		document.getElementById("menuli1").style.borderBottom="none";
	}
    for(i=0;i<xxx.length;i++)
    xxx[i].onmouseout =
    function(){
    	document.getElementById("menuli1").style.borderBottom="solid white 3px";
	}
}