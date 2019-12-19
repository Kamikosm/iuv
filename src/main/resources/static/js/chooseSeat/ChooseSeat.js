$(function() {
    var movie = new Vue({
        el:'#message',
        data:{
            movieMsg:{}
        },
        methods:{

        }
    });
    AjaxMovieMsg(movie);
});

function AjaxMovieMsg(movie) {
    var url = "/ticket/getMsg";
    var params = {movieId:1};
    $.post(url,params,function (result) {
        movie.movieMsg = result.data;
        console.log(movie.movieMsg)
    });
}


