var deck = {}
deck.btn_click = function(btn_sel,url){
	$(btn_sel).click(function(){
		window.location.href = url;
	});
}

deck.btn_submit = function(sel,form_sel){
	$(sel).click(function(){
		$(form_sel).submit();
	})
	
}
deck.btn_click_attr = function(btn_sel, tag_attr){
	$(btn_sel).click(function(){
		var url = $(this).attr(tag_attr)
		if( url == '') return false;
		window.location.href = url;
	});
}
deck.btn_submit_attr = function(btn_sel, tag_attr){
	$(btn_sel).click(function(){
		var rel = $(this).attr(tag_attr)
		if( rel == '') return false;
		$(rel).submit()
	});
}

deck.drop_box = function(sel){
	$(sel+' .menu_box li').click(function(){
		var rel = $(this).attr('rel')
		//alert(rel)
		$(this).parents('.menu_space').find('input[name="sort_id"]').val(rel)
		
	})
}

deck.error_status = function(type){
	if(type == '1'){
		alert('User data don\'t exists!')
	}else if(type == '2'){
		alert('Data card existed')
	}else if(type == '3'){
		alert('Offense stamina is over')
	}else if(type == '4'){
		alert('Defense stamina is over')
	}else if(type == '5'){
		alert('Deck card num is over')
	}
	return false;
}

deck.sort_deck = function(sel){
	$(sel).click(function(){
		var rel = $(this).attr('rel')
		if(rel == '') return false
		var tmp	= rel.split('|')
		$('#form_sort_deck input[name="priority"]').val(tmp[0])
		$('#form_sort_deck input[name="act"]').val(tmp[1])
		$('#form_sort_deck').submit();
		
	})
}