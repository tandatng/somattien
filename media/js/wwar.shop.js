var shop = {}
//shop.btn_click = function(btn_sel,url){
//	$(btn_sel).click(function(){
//		window.location.href = url;
//	});
//}

shop.error_status = function(type,refer_url){
	if(type == '1'){
		popup.no_card_master();
	}
	else if(type == '2'){
		popup.not_enough_wcoin();
	}
	else if(type == '3'){
		alert("Item is not valid. Please try again.");
		//location.href = refer_url
	}
	else if(type == '4'){
		alert("You don't have this item.");
		//location.href = refer_url
	}
	else if(type == '5'){
		alert("Can not use gift item.");
		//location.href = refer_url
	}
	else if(type == '6'){
		alert("Your stamina is full. Item will not be used.");
		//location.href = refer_url
	}
	else if(type == '7'){
		alert("Your attack stamina and defense stamina are full. Item will not be used.");
		//location.href = refer_url
	}
}
shop.btn_click = function(){
	$('.btn_click').click(function(){
		var rel = $(this).attr('rel')
		location.href = rel;
	});
}

shop.btn_submit = function(sel,form_sel){
	$(sel).click(function(){
		$(form_sel).submit();
	})	
}

shop.show_popup = function(data,sel_popup){
	$(sel_popup).find('input[name="equipId"]').val(data.equipId)
	$(sel_popup).find('input[name="equipCategory"]').val(data.equipCategory)
	$(sel_popup).find('input[name="cardId"]').val(data.cardId)
	$(sel_popup).find('input[name="cardLevel"]').val(data.cardLevel)
	$(sel_popup).find('input[name="type"]').val(data.type)	
	$(sel_popup).find('.popup_equip_name').html(data.name)
	$(sel_popup).find('.btn_cancel').click(function(){
		$(sel_popup).hide()
	})
	if (data.equipCategory == 11){		
		$(sel_popup).find('.popup_img').attr('src', MEDIA_URL + 'img/item/'+ data.equipId + '.png');
	}else if (data.equipCategory == 10){		
		$(sel_popup).find('.popup_img').attr('src', MEDIA_URL + 'img/card/50/'+ data.equipId+'_0.png');
	}
	
	$(sel_popup).find('.btn_submit').click(function(){		
		if (data.type == 'b'){
			$(sel_popup).hide();
			if("jsProxy" in window){
				jsProxy.purchase(data.equipId, "/shop/list/b/");
			}else{
				nativeCall.inappPurchase(data.equipId);
//				$(sel_popup).find('form').submit()
			}
		}else{
			$(sel_popup).find('form').submit()
		}
		//$(sel_popup).hide()
	})
	//$(sel_popup).show()
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


shop.btn_popup = function(sel,sel_popup){
	$(sel).click(function(){
		var rel = $(this).attr('rel');
		val = rel.split('-');
		equipId 					= val[0];
		equipCategory 				= val[1];
		cardId 						= val[2];
		cardLevel 					= val[3];
		type 						= val[4];
		name 						= val[5];
		not_enough_coin 			= val[6];
		OffenseDefenseStamina_full	= val[7];
		stamina_full	 			= val[8];
		if(not_enough_coin == '1'){
			location.href = "/shop/2/"
			return false
		}else if(OffenseDefenseStamina_full == '1'){
			location.href = "/shop/7/"
				return false
		}else if(stamina_full == '1'){
			location.href = "/shop/6/"
				return false
		}
		
		if (rel == '') return false;
		shop.show_popup({'equipId':equipId,'equipCategory':equipCategory, 'cardId':cardId, 'cardLevel':cardLevel,'type':type,'name':name },sel_popup);
	})
}

