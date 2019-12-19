package com.iuv.dao;

import java.util.List;
import java.util.Map;

import com.iuv.pojo.movie.LittleMovieMsg;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.iuv.pojo.movie.Movie;
import com.iuv.pojo.movie.MovieScene;;
/**
 * 选座
 * 
 * */
@Mapper
public interface MovieSeatDao {
	List<MovieScene> getScenes(Integer movieId);

	MovieScene getScene(Integer sceneId);

    @Select("select seat_id from seat where scene_id=#{sceneId}")
    List<Integer> getSeats(Integer sceneId);

    int addSeats(Integer sceneId,Integer userId,@Param("seatIds") Integer...seatIds);

    LittleMovieMsg getMovieMsg(Integer movieId);
}
