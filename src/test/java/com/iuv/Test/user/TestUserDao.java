package com.iuv.Test.user;


import com.iuv.dao.CommentDao;
import com.iuv.dao.UserDao;
import com.iuv.pojo.user.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/*
 *Author:		Houke_zou
 *E-mail:		houke_zou@163.com
 *Date:			2019年12月19日  下午3:56:56
 */


@RunWith(SpringRunner.class)
@SpringBootTest
public class TestUserDao {

    @Autowired
    private UserDao userDao;



    @Test
    public void queryUserById() {
        System.out.println("测试开始了");
        User user = userDao.queryUserById(2);
        System.out.println(user);
        System.out.println("测试结束了");
    }

    @Test
    public void queryUserByUserName() {
        System.out.println("测试开始了");
        String name = "陈梦妮";
        User user = userDao.queryUserByUserName(name);
        System.out.println(user);
        System.out.println("测试结束了");
    }


}
