package com.iuv.util;

import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.exceptions.ServerException;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
/**
 * 此类短信验证工具类
 * */
public class SendSms {
	
	public static String sendSms(String phone) {
        DefaultProfile profile = DefaultProfile.getProfile("长沙", "LTAI4FpUYT57GWpyQAq5Vviq", "nvQVbJoBq1O1Bkzpzc2pObcWUluOlc");
        IAcsClient client = new DefaultAcsClient(profile);
        int[] a = {0,1,2,3,4,5,6,7,8,9};
    	String code = "";
    	for (int i = 0; i < 6; i++) {
			code=code+a[(int) (Math.random()*10)];
		}
        CommonRequest request = new CommonRequest();
        request.setMethod(MethodType.POST);
        request.setDomain("dysmsapi.aliyuncs.com");
        request.setVersion("2017-05-25");
        request.setAction("SendSms");
        request.putQueryParameter("RegionId", "长沙");
        request.putQueryParameter("PhoneNumbers", phone);
        request.putQueryParameter("SignName", "iuv电影院");
        request.putQueryParameter("TemplateCode", "SMS_175241027");
        request.putQueryParameter("TemplateParam", "{'code':'"+code+"'}");
        try {
            CommonResponse response = client.getCommonResponse(request);
            System.out.println(response.getData());
        } catch (ServerException e) {
            e.printStackTrace();
        } catch (ClientException e) {
            e.printStackTrace();
        }
        return code;
		
	}

}
