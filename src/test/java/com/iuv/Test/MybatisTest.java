package com.iuv.Test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.iuv.dao.TestDao;
/**
 * 数据库测试,测试能否连接上数据库
 * @author kamiko
 *
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class MybatisTest {
	@Autowired
	private TestDao testDao;
	
	@Test
	public void Test01() {
		int count = testDao.getCount();
		System.out.println("count="+count);
	}
}
