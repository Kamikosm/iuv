package com.iuv.util;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.iuv.pojo.movie.JsonResult;


@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(RuntimeException.class)
	@ResponseBody
	public JsonResult doHandleRuntimeException(RuntimeException e ) {
		System.out.println("赵文启真智障也");
		e.printStackTrace();
		return new JsonResult(e);
	}
	
}
