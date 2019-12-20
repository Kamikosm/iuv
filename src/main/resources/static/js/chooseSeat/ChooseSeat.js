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
    someChangs();
});

function someChangs() {

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
                console.log(movie.nums)
            }else{
                $(val).attr("class","seat selectable");
                movie.nums.splice(movie.nums.indexOf(mun),1);
                console.log(movie.nums)
            }
        });

    })
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


