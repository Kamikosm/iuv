$(function() {
    var movie = new Vue({
        el:'.m2',
        data:{
            movieMsg:{},
            sceneMsg:{}
        },
        methods:{

        }
    });
    AjaxMovieMsg(movie);
    AjaxSceneMsg(movie);
});

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


