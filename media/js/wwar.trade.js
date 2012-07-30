var trade = {}

trade.checkFormSearch = function(doc){
	if(doc.gid.value == '' || doc.gid.value == doc.gid.defaultValue){
		alert('Please enter friend\'s game ID')
		return false
	}
	return true
}

trade.drop_box = function(sel){
	$(sel+' .menu_box li').click(function(){
		var rel = $(this).attr('rel')
		//alert(rel)
		$(this).parents('.menu_space').find('input[name="sort_id"]').val(rel)
		
	})
}

trade.checkFormTrade = function(doc){
	len = $(doc).find('input[name="user_equip_card_id"]:checked').length
	if(len == 0){
		alert('Please choose at least 1 card')
		return false
	}
	if(len > 5){
		alert('You cannot trade over 5 cards')
		return false
	}
	return true
}
trade.btn_checkbox	= function(sel){
	$(sel).click(function(){
		var rel = $(this).attr('rel')
		$('.btn_'+rel).toggleClass('blind');
	})
}

trade.checkFormComment = function(doc){
	if(doc.comment.value == ''){
		alert('Please input your comment')
		return false
	}
	return true
}

trade.getSelectedList = function(doc){
	//alert('dafdfdas')
	var ids = '0'
	$('input[name="user_equip_card_id"]:checked').each(function(i,v){
		ids += '-'+$(this).val()
	})
	doc.card_ids.value = ids
	return true;
}

trade.checkMixBundleSelected = function(doc){
	var ln = $('input[name="user_equip_card_id"]:checked').length

	if( ln < 1 || ln > 10){
		alert('You can only bundle fusion 5 cards')
		return false
	}
	return true
}