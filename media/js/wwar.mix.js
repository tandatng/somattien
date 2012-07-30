var mix = {}

mix.show_popup = function(data,sel_popup){
	$(sel_popup).find('input[name="equip_id"]').val(data.equip_id)
	$(sel_popup).find('.btn_cancel').click(function(){
		$(sel_popup).hide()
	})
	$(sel_popup).find('.btn_submit').click(function(){
		$(sel_popup).find('form').submit()
	})
	$(sel_popup).show()
}

mix.btn_popup = function(sel,sel_popup){
	$(sel).click(function(){
		var rel = $(this).attr('rel');
		if (rel == '') return false;
		item.show_popup({'equip_id':rel},sel_popup);
	})
}


mix.btn_checkbox	= function(sel){
	$(sel).click(function(){
		var rel = $(this).attr('rel')
		$('.btn_'+rel).toggleClass('blind');
	})
}

mix.drop_box = function(sel){
	$(sel+' .menu_box li').click(function(){
		var rel = $(this).attr('rel')
		$(this).parents('.menu_space').find('input[name="sort_id"]').val(rel)
		
	})
}

mix.error_status = function(error, refer_url){
	if(error == '1'){
		alert('Data user is not valid')
		return false
	}
	if(error == '2'){
		alert('Data master is not valid')
		return false
	}
	if(error == '3'){
		alert('You can only fuse maximum 10 monsters')
	}
	if(error == '4'){
		popup.full_deck()
	}
	if(error == '5'){
		popup.not_enough_gil()
	}
}

mix.switch2result = function(wlby_sel, result_sel){
	$(wlby_sel).click(function(){
		$(wlby_sel).remove();
		$(result_sel).show();
		$('#header').show();
	})
}

mix.getSelectedList = function(doc){
	//alert('dafdfdas')
	var ids = '0'
	$('input[name="user_equip_card_id"]:checked').each(function(i,v){
		ids += '-'+$(this).val()
	})
	doc.card_ids.value = ids
	return true;
}

mix.checkMixBundleSelected = function(doc){
	var ln = $('input[name="user_equip_card_id"]:checked').length

	if( ln < 1 || ln > 10){
		alert('You can only fuse maximum 10 monsters')
		return false
	}
	return true
}