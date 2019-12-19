package com.iuv.Test;

import com.iuv.dao.MovieSeatDao;
import com.iuv.pojo.movie.LittleMovieMsg;
import com.iuv.pojo.movie.MovieScene;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author kamiko
 * @create 2019-12-18 8:53
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class SceneTest {
    @Resource
    private MovieSeatDao dao;

    @Test
    public void getScenes(){
        List<MovieScene> scene = dao.getScenes(25);
        System.out.println(scene);
    }

    @Test
    public void getScene(){
        MovieScene scene = dao.getScene(2);
        System.out.println(scene);
    }

    @Test
    public void getSeats(){
        List<Integer> seats = dao.getSeats(1);
        System.out.println(seats);
    }

    @Test
    public void saveSeats(){
        int row = dao.addSeats(2, 2, 35);
        System.out.println("row=" + row);
    }

    @Test
    public void getMovie(){
        LittleMovieMsg movieMsg = dao.getMovieMsg(1);
        System.out.println(movieMsg);
    }
}
