$(function(){
	
	//搜索引擎
	$(function() {
		var availableTags = [];
		$.ajax({
			url:'autoComplete',
			type:'post',
			dataType:'json',
			success:function(data){
				for(var i = 0; i < data.length; i++){
					availableTags[availableTags.length] = data[i].mvName;
				}
			}
		});
		$("#autocomplete").autocomplete({
			source: availableTags
		});
	});
	
});