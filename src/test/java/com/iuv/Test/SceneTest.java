package com.iuv.Test;

import com.iuv.dao.MovieSeatDao;
import com.iuv.dao.OrderDao;
import com.iuv.pojo.movie.LittleMovieMsg;
import com.iuv.pojo.movie.MovieScene;
import com.iuv.pojo.order.Order;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.Date;
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
    @Resource
    private OrderDao orderDao;

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
        Integer[] seats = {2,45,33,110};
        int row = dao.addSeats(3, 4, seats);
        System.out.println("row=" + row);
    }

    @Test
    public void getMovie(){
        LittleMovieMsg movieMsg = dao.getMovieMsg(1);
        System.out.println(movieMsg);
    }

    @Test
    public void getOrder(){
        List<Order> orders = orderDao.findOrders(7);
        for (Order order : orders) {
            System.out.println(order);
        }
        System.out.println(orders);
    }

    @Test
    public void insertOrder(){
        Order or = new Order();
        or.setMvName("诛仙Ⅰ");
        or.setHall(3);
        or.setMovieImg("img/hb/2sml_pic.png");
        or.setPrice(50.0);
        or.setSceneTime(new Date());
        or.setOrderTime(new Date());
        or.setUserId(5);
        or.setSeatId("1,3,5");
        int row = orderDao.insertOrder(or);
        System.out.println("row="+row);
    }
}
