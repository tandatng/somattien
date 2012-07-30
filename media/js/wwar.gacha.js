var gacha = {}
gacha.btn_click = function(btn_sel,url){
	$(btn_sel).click(function(){
		window.location.href = url;
	});
}

gacha.btn_click_attr = function(btn_sel,tag_attr){
	$(btn_sel).click(function(){
		var url = $(this).attr(tag_attr)
		if(url == '') return false;
		window.location.href = url;
	});
}

gacha.btn_submit = function(sel,form_sel,init_error_type){
	
	$(sel).click(function(){
		$(form_sel).submit();
	})
	
}

gacha.error_status = function(type){
	if(type == '1'){
		popup.full_deck();
		return false
	}
	else if(type == '2'){
		popup.not_enough_wcoin();
		return false
	}
	else if(type == '3'){
		popup.not_enough_cheerpoint();
		return false
	}
	return true
}

gacha.skip_anim = function(sel,url){
	$(sel).click(function(){
		window.location.href = url;
	})
}

gacha.switch2result = function(wlby_sel, result_sel){
	$(wlby_sel).click(function(){
		$(wlby_sel).remove();
		$(result_sel).show();
		$('#header').show();
	})
}