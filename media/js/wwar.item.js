var item = {}
item.btn_click = function(btn_sel,url){
	$(btn_sel).click(function(){
		window.location.href = url;
	});
}

item.btn_submit = function(sel,form_sel){
	$(sel).click(function(){
		$(form_sel).submit();
	})
	
}

item.show_popup = function(data,sel_popup){
	var data_name = data.find('input[name="name"]').val();
	var data_nocoin = data.find('input[name="no_coin"]').val();
	var data_full_attack = data.find('input[name="full_attack"]').val();
	var data_full_stamina = data.find('input[name="full_stamina"]').val();
	var equip_id = data.find('input[name=equipId]').val();
	if(data_nocoin == '1' || data_full_attack == '1' || data_full_stamina == '1'){ data.submit(); return false; }
//	$(sel_popup).find('.btn_cancel,.btn_submit').removeClass('transit');
	
	if(equip_id == 11){
		$(sel_popup).find('.text2').removeClass('out');
		$(sel_popup).find('.text1').addClass('out');
		$(sel_popup).find('.popup_equip_name').html('');
	} else {
		
		$(sel_popup).find('.text1').removeClass('out');
		$(sel_popup).find('.text2').addClass('out');
		$(sel_popup).find('.popup_equip_name').html(data_name);
	}	
	
	$(sel_popup).find('.gil_img_small').attr('src', MEDIA_URL + 'img/item/50/'+ equip_id + '.png');
//	$(sel_popup).find('.btn_cancel').click(function(){
////		$(sel_popup).hide();
//		popup.overlay().close();
//		$('.btn_use,.btn_buy').removeClass('transit');
//	})
	$(sel_popup).find('.btn_submit').click(function(){
		//$('form#use_item_'+data.equip_id).submit()
		data.submit()
	});
	
	$(sel_popup).overlay({
		close:".btn_cancel",
		mask : {
			color:"#011221",
			opacity:0.8
		},
		top:'2%',
		closeOnClick: false,
//		oneInstance:false,
		load:true
	}).load();
	
}

item.btn_popup = function(sel,sel_popup){
	$(sel).click(function(){
		var rel = $(this).attr('rel');
		if (rel == '') return false;
		item.show_popup($(rel),sel_popup);
	})
}

item.btn_click_gift = function(){
	$('.btn_gift').click(function(){
		var rel = $(this).attr('rel');
		if (rel == '') return false;
		window.location.href = '/item/friends/'+rel
	})
}
item.btn_sendgift = function(){
	$('.btn_sendgift').click(function(){
		$(this).parent().submit();
	})
}

item.error_status = function(type){
	if(type == '1'){
		popup.no_card_master();
	}else if(type == '2'){
		popup.not_enough_wcoin();
	}else if(type == '3'){
		alert('You cannot send 1 gift to yourself')
	}
}
