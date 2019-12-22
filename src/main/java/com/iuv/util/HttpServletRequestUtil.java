package com.iuv.util;

import javax.servlet.http.HttpServletRequest;

/*
*Author:		Houke_zou
*E-mail:		houke_zou@163.com
*Date:			2019年10月1日  上午8:05:03
*/


//工具类,用以对Request进行解析,Request中的所有数据解析
public class HttpServletRequestUtil {
	
	public static int getInt(HttpServletRequest request, String key){
		try{
			return Integer.decode(request.getParameter(key));
		}catch(Exception e){
			return -1;
		}
	}
	public static Long getLong(HttpServletRequest request, String key){
		try{
			return Long.valueOf(request.getParameter(key));
		}catch(Exception e){
			return -1L;
		}
	}
	public static Double getDouble(HttpServletRequest request, String key){
		try{
			return Double.valueOf(request.getParameter(key));
		}catch(Exception e){
			return -1d;
		}
	}
	public static boolean getBoolean(HttpServletRequest request, String key){
		try{
			return Boolean.valueOf(request.getParameter(key));
		}catch(Exception e){
			return false;
		}
	}
	public static String getString(HttpServletRequest request, String key){
		try{
			String result = request.getParameter(key);
			if(result!=null){
				result= result.trim();
			}
			if("".equals(result)){
				result = null;
			}
			return result;
		}catch(Exception e){
			return null;
		}
	}
}