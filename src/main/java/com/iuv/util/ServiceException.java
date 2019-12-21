package com.iuv.util;
/**
 * 全局异常处理类
 * 
 * */
public class ServiceException extends RuntimeException {

	private static final long serialVersionUID = 6091093824761501124L;
	
	public ServiceException() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ServiceException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public ServiceException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}

}
