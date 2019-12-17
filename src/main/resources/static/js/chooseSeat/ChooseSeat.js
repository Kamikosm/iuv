$(function(){
	
	$(".p3").on("click",".b",doUpdate);
    $("#text span").click(function() {
		if ($(this).hasClass('selectable')&&$('.selected').length<=$(".ticket-container").attr("data-limit")){	    	
    		$(this).removeClass('selectable');
        	$(this).addClass('selected');
        	
			$(".b").css({"background-color":"#FF6400","cursor":"pointer"});
			$(".price").empty();
			$(".price").html($(".money").text()*($('.selected').length-1));
        	$(".no-ticket").css("display","none");
        	$(".has-ticket").css("display","block");
        	$(".ticket-container").html($(".ticket-container").html()+"<span class='ticket' data-row-id='"+$(this).attr('data-row-id')+"' data-column-id='"+$(this).attr('data-column-id')+"' data-index='"+$(this).attr('data-row-id')+"-"+$(this).attr('data-column-id')+"'>"+$(this).attr('data-row-id')+"排"+$(this).attr('data-column-id')+"座</span>");
    	}else if($(this).hasClass("selected")){
    		$(this).removeClass('selected');
        	$(this).addClass('selectable');
        	$(".price").html($(".money").text()*($('.selected').length-1));
        	if($('.selected').length==1){
        		$(".has-ticket").css("display","none");
        		$(".no-ticket").css("display","block");
        		$(".b").css({"background-color":"#dedede","cursor":"auto"});
        	}
        	/*alert(""+$('.selected').length+"");*/
        	$("[data-index="+$(this).attr('data-row-id')+"-"+$(this).attr('data-column-id')+"]").remove();
        	/*alert(""+$(this).attr('data-row-id')+"-"+$(this).attr('data-column-id')+"");*/
    	}else{
    		swal("您最多可以选择6个座位","若给您带来不便,敬请谅解!","warning");
    	}
    });
    
 	$(".i1").focus(function(){
        $(this).keyup(function(){
            var num = /^1[3-9]+\d{9}$/;
            var verifyValue = $(this).val();
            if(!num.test(verifyValue)||verifyValue.length!=11){
                //输入非数字，或非11位数，input边框显示红色
                $(this).css("border","1px solid #FF6400");
            }else{
                $(this).css("border","1px solid #e5e5e5");
            }
            if(num.test(verifyValue)&&verifyValue.length==11){
                //输入符合要求，下一步按钮显示亮色
                $(".pp").css("color","#FF6400");
            }else{
                $(".pp").css("color","#ccc");
            }
    	});
 	});
 	
 	
 	
 		$.getJSON("movie/doFindObject",function(result){
 			$(".name").html(result.data.mvName);
 			$(".type").html(result.data.type);
 			$(".time").html(result.data.mvTime+"分钟");
 			$(".session").html(result.data.area);
 			$(".money").html(result.data.price);
 			$(".poster img").attr("src",result.data.smlPic);
 		});
 		
 		$.getJSON("movie/doCreateTable",function(result){
 			var url = "movie/doSelect";
 	 		$.getJSON(url,function(result){
 	 			$('#text span').each(function(index,el){
 	 			$(el).attr("data-st",result.data[index].data_st);
 	 			if(result.data[index].data_st=="Y"){
 	 				if($(el).hasClass('selectable')){
 	 	 		 		$(el).removeClass('selectable');
 	 	 		 		$(el).addClass('sold');
 	 	 		 	}
 	 			}
 	 		});
 	 	});
 		});
 		
 			
 		
 	function doUpdate(){
 		if(!$(".seat").hasClass('selected')){
 			return;
 		}
 		else{
 		$.ajax({
 			url:'hello',
 			type:'post',
 			dataType:'json',
 			success:function(data){
 				if(data.test==false){
 					swal("请先登录","登录成功后,您可顺利购票!","warning");
 				}
 				else{
 					var seatIds = [];
 			 		
 			 		$("#text span").each(function(index,el){
 			 			
 			 			if($(el).hasClass('selected')){
 			 				seatIds.push(index+1);
 			 			}
 			 				
 			 		});
 			 		var params={"seatIds":seatIds.toString(),'price':$(".price").html()};
 			 		var url = "movie/doUpdate"
 			 		$.post(url,params,function(result){
 			 			$.ajax({
 			 				url:'pay',
 			 				type:'post',
 			 				data:{'price':$(".price").html()},
 			 				dataType:'html',
 			 				success:function(data){
 			 					document.write(data);
 			 				}
 			 			});
 			 		});
 				}
 			}
 		});
 	}
 	}
});

