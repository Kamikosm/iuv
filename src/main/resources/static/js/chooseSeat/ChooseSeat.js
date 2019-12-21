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
});

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

    })
}

function someChangs(movie) {
    if(movie.nums.length!=0){
        $(".no-ticket").attr("style","display: none");
        $(".has-ticket").attr("style","display: block");
        $(".price").innerHTML = movie.nums.length*movie.movieMsg.price;
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
    }else{
        $(".no-ticket").attr("style","display: block");
        $(".has-ticket").attr("style","display: none");
    }
}

function AjaxMovieMsg(movie) {
    var url = "/ticket/getMsg";
    var params = {movieId:1};
    $.post(url,params,function (result) {
        movie.movieMsg = result.data;
    });
}

function AjaxSceneMsg(movie) {
    var url = "/ticket/getSceneMsg"
    var params = {sceneId:2};
    $.post(url,params,function (result) {
        var date = result.data.sceneTime;
        var time = new Date(date).toLocaleString();
        result.data.sceneTime = time;
        movie.sceneMsg = result.data;
    });
}


