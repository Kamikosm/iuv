package com.iuv.controller;

import java.util.UUID;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.request.AlipayTradePagePayRequest;


/**
 * 支付宝沙盒环境
 * */

@Controller
public class PayController {
	
	private final String APP_ID = "2016101200664766";
	private final String APP_PRIVATE_KEY = "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDC+4hSm4IHIxwSz/zgUcUjOH2KLZ2tGMz9IZpBKTK0eHzCxrCOrff8P49V0h//vr+TAr9MaW29I8CVynkPPIX/IMVmEq9VPWm6OKOW4N4sVjuedeVfcczLLgQJN0HzOYsqBBlV+TmAdAnta9JSZeT/4sZMa1NIjFsGNapkNn/3iRMZ1MLStmxXrT2XgupFbev6WDxXKjGmNBJZXqLp+e985+BYPhRaOG5faKpJG5WxcktX0BrBGF/bz8pcq5jEX5anBKV3gEZZIzHEzKEuLfKohKgX9nqdfcvMy6XzKc9hJ0xwYIrmveq8tngozssniTYnZvja01JncNK2o0Qg1HujAgMBAAECggEALHCZ5IIPA8NrzZnb/+CDNwDUFB9Ldb1WU0dKWhmiteFURix050Adaj+uUpgetPJrxXz1ztukqFwys7E/IEriG4EDnL0beykRJOFt36CG4sIQupASZEuSqqhlQRh4DpCJ+FyQzbiM84r/DD7r493XcL7mBVrc04cx49ttZ4PIbMlJsnZ/Q3OYFtj75nUOC8Lv54lEbUsbo51gKkvBXFowMdS6CWQCbGVZcxFfwXb1PcW/cVneZNHCzJ4TfUk9qZbYiJbPEMQiaKwmPHQjzkKoLYEmGBx86oPIM+5KoTZcbs22U6W9+jdh/01zFvHCESxjbO9UVj5wCpG5/6+vnz+j4QKBgQD6QVc4d/pSGA99gi5cDrmtNWh8lSGDuSE5q3260Uew2bC7XNXxQe4lw8l33OCqbsD9zoEf8TOvHfIWn0b1Tb1ZCTqq1OLbmiucDR/odeydWfCbPEOIUNgH2aw8IQPx/umximQv2fDwXYdsOVjF8nHsMrL3yZgSOLsPvkPjLy8J8QKBgQDHdV/PQK+8fhXYXHk9oYMu1uCzsypgCSEcCivpRvYR8Ivc8kEDQu9doT8RvfyFrzKTddnOok1G523sCLjb1djtkkh324MFPK/K58+K+Eb7QfnPK/dqN+6cCeiciut6v31TB6UXk2sqAWkbC4ChBBnVEJMlDHQhBjchq9qZrInq0wKBgGFWlulU6V2TFDtaLlQKOjhf5LNIgk+s63p19KJ8kmj8U1ydIG4Fme7Ad5WSqSRBjflqoBjfhZ3ghPA9paj2Qublyxb1VQPbtIivJjER5SXS/N40k4PrBgwPo4mDwfgXkahHzu451Bh6GJmEuL3NrngTxD7S/75eqIvYEqnECYTRAoGAbE6lFwJ2KvGAZTtZroi8ljuiSpIYiYuLihFP5N1ek0E+gVyexuma1wnPGJBExkbrPL1650Skl8Lloozd7KnDoMWVSlhNXhOlFZYo0bqduKQLxV6HfAshK2QKBq88zSucHvEAybuILogTjdcCIuz6JgNZE34etSwN1d/e1SGmxncCgYAyl8k3S7HQCzwsptLt3GO/o3Yw2Q6hKHXmUzKfA2XpdkBaQ7aX96OUYN4i4DO7lsMWsXkA2dUYd6qOt9//9d83+BRBoABzH5qnuYNvhvFmwqMYimWR1wGwPfMKosw0XWjz+CkrAvx2N9zYqD8y9VR1gaB8NZ7AeWLG+mVlUEgJpA==";
	private final String ALIPAY_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwvuIUpuCByMcEs/84FHFIzh9ii2drRjM/SGaQSkytHh8wsawjq33/D+PVdIf/76/kwK/TGltvSPAlcp5DzyF/yDFZhKvVT1pujijluDeLFY7nnXlX3HMyy4ECTdB8zmLKgQZVfk5gHQJ7WvSUmXk/+LGTGtTSIxbBjWqZDZ/94kTGdTC0rZsV609l4LqRW3r+lg8VyoxpjQSWV6i6fnvfOfgWD4UWjhuX2iqSRuVsXJLV9AawRhf28/KXKuYxF+WpwSld4BGWSMxxMyhLi3yqISoF/Z6nX3LzMul8ynPYSdMcGCK5r3qvLZ4KM7LJ4k2J2b42tNSZ3DStqNEINR7owIDAQAB";
	private final String CHARSET = "UTF-8";
	private final String FORMAT = "JSON";
	private final String SIGN_TYPE = "RSA2";
	private final String GATEWAY_URL = "https://openapi.alipaydev.com/gateway.do";
	private final String NOTIFY_URL = "http://localhost/notifyUrl";
	private final String RETURN_URL = "http://localhost/seat-temp";

	
	
	
	@RequestMapping(value="pay")
	public void Tijiaobiaodan(HttpServletResponse httpResponse,Integer price) throws Exception {
		AlipayClient alipayClient = new DefaultAlipayClient(
				GATEWAY_URL, 
				APP_ID, 
				APP_PRIVATE_KEY, 
				FORMAT, 
				CHARSET, 
				ALIPAY_PUBLIC_KEY, 
				SIGN_TYPE);
		
		AlipayTradePagePayRequest request = new AlipayTradePagePayRequest();
		
		request.setReturnUrl(RETURN_URL);
		
        request.setNotifyUrl(NOTIFY_URL);
        
//        AliOrderInfo orderInfo = new AliOrderInfo();
     
        request.setBizContent("{"
        		+ "'out_trade_no':'"+ UUID.randomUUID().toString() +"',"
                + "'total_amount':'"+ price +"',"
                + "'subject':'iuv电影院',"
                + "'auth_code':'28763443825664394',"
                + "'scene':'bar_code',"
                + "'product_code':'FAST_INSTANT_TRADE_PAY'}"
                );
        
        String form = "";
        try {
        	form = alipayClient.pageExecute(request).getBody();
        }catch (AlipayApiException e) {
        	e.printStackTrace();
        }
        httpResponse.setContentType("text/html;charset="+CHARSET);
        httpResponse.getWriter().write(form);
        httpResponse.getWriter().flush();
        httpResponse.getWriter().close();
	}
	
}
