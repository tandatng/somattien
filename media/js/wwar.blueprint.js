var blueprint = {}

blueprint.btn_click = function(){
	$('.btn_click').click(function(){
		var rel = $(this).attr('rel')
		location.href = rel;
	});
}

blueprint.btn_submit = function(sel,form_sel){
	$(sel).click(function(){
		$(form_sel).submit();
	})	
}

blueprint.error_status = function(type){
	if(type == 1){
		alert("This is not trap item");
	}
	else if(type == 2){
		alert("Number of trap of card piece is bigger than number of item");
	}
	else if(type == 3){
		alert("User data does not exist");
	}
	else if(type == 4){
		alert("Number of trap of card piece reach to maximum");
	}
	else if(type == 5){
		alert("Number of trap of card piece if over number of pieces");
	}
}

blueprint.animation_end = function(equip_ids, refer_url){
	var tmp = equip_ids.split('-')
	var len = tmp.length
	if(len == 1){
		window.location.href = refer_url
	}else{
		if(index < len - 1) window.location.href = '/blueprint/complete/'+equip_ids+'/?idx='+(index+1)
		else window.location.href = refer_url
			
	}
	
}