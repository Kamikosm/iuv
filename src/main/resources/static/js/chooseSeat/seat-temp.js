$(function() {
    var movie = new Vue({
        el:'.m2',
        data:{
            movieMsg:{},
            sceneMsg:{},
            falg:[],
            nums:[],
        },
        methods:{

        }
    });
    AjaxMovieMsg(movie);
    AjaxSceneMsg(movie);
    giveNum(movie);
    getSeats();
});

function getSeats(){
    var url = "/ticket/getSeats"
    var params = {sceneId:3};            //需要动态获取场次id
    $.post(url,params,function (result) {
        var seats = result.data;
        console.log(seats)
        for (var i = 0; i < seats.length; i++) {
            $("#text span").eq(seats[i]-1).attr("class","seat sold");
            $("#text span").eq(seats[i]-1).off("click");
        }
    })
}

function giveNum(movie) {
    $("#text span").each(function (index,val) {
        $(val).attr("num",index+1);
        movie.falg.push(false);
        $(val).click(function () {
            movie.falg[index] = !movie.falg[index];
            var flag = movie.falg[index];
            var mun = $(val).attr("num")-0;
            if(flag){
                $(val).attr("class","seat selected")
                movie.nums.push(mun);
            }else{
                $(val).attr("class","seat selectable");
                movie.nums.splice(movie.nums.indexOf(mun),1);
            }
            someChangs(movie);
        });

    });
    $(".b").click(function () {
        var price = movie.nums.length*movie.movieMsg.price;
        $.ajax({
            url:'pay',
            type:'post',
            data:{"price":price},
            dataType:'html',
            success:function(data){
                document.write(data);
            }
        });
    })
}

function someChangs(movie) {
    if(movie.nums.length!=0){
        $(".no-ticket").attr("style","display: none");
        $(".has-ticket").attr("style","display: block");
        $(".price")[0].innerText = movie.nums.length*movie.movieMsg.price;
        $(".ticket-container").empty();
        for(var i = 0;i<movie.nums.length;i++){
            var lie = movie.nums[i]%10;
            var pai = 0;
            if(lie!=0) pai = (movie.nums[i]-lie)/10+1;
            if(lie==0){
                pai = movie.nums[i]/10;
                lie = 10;
            }
            var spa = "<span class='ticket'>"+pai+"排"+lie+"列"+"</span>"
            $(".ticket-container").append(spa)
        }
        $(".b").css({
            "background-color":"rgb(255, 100, 0)",
            "cursor": "pointer"})
    }else{
        $(".no-ticket").attr("style","display: block");
        $(".has-ticket").attr("style","display: none");
        $(".price")[0].innerText = 0;
        $(".b").css({
            "background-color":"rgb(222, 222, 222)",
            "cursor": "pointer"})
        $(".b").off("click");
    }
}

function AjaxMovieMsg(movie) {
    var url = "/ticket/getMsg";
    var params = {movieId:1};        //需要动态获取电影id
    $.post(url,params,function (result) {
        movie.movieMsg = result.data;
    });
}

function AjaxSceneMsg(movie) {
    var url = "/ticket/getSceneMsg"
    var params = {sceneId:2};       //需要动态获取场次id
    $.post(url,params,function (result) {
        var date = result.data.sceneTime;
        var time = new Date(date).toLocaleString();
        result.data.sceneTime = time;
        movie.sceneMsg = result.data;
    });
}


