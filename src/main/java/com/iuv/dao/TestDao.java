package com.iuv.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface TestDao {
	@Select("select count(*) from movie")
	int getCount();
}
