var device = {}

device.init = function(){
	
	$('.search_btn').click(function(){
		var password = $('#password').val();
		if (!password){
			alert('Please input password');
			return false;
		}
		$.ajax({
			url: '/device/change/password/make',
			type: 'POST',
			data:{
				'password': password
			},
			success: function(data){
				if(data.status == 1){
					$('.error_msg').text('Device code existed');
				}else if(data.status == 4){
					$('.error_msg').text('Input password is invalid');
				}
			}
		})
		return false;
	});
}

device.btn_click = function(btn_sel,url){
	$(btn_sel).click(function(){
		window.location.href = url;
	});
}

device.btn_submit = function(sel,form_sel){
	$(sel).click(function(){
		$(form_sel).submit();
	})	
}

/*device.btn_submit_attr = function(sel, form_sel, tag_attr){
	$(sel).click(function(){
		var target_uid = $(this).attr(tag_attr)
		$(form_sel + target_uid).submit();
	})	
}*/

device.btn_click_attr = function(btn_sel, tag_attr){
	$(btn_sel).click(function(){
		var url = $(this).attr(tag_attr)
		if( url == '') return false;
		window.location.href = url;
	});
}
device.btn_submit_attr = function(sel_popup, btn_sel, tag_attr){
	$(btn_sel).click(function(){
		var rel = $(this).attr(tag_attr)
		if( rel == '') return false;
		$(sel_popup).find('input[name="place_type"]').val($("#" + rel + " input[name=place_type]").val());
		$(sel_popup).find('input[name="change_type"]').val($("#" + rel + " input[name=change_type]").val());
		$(sel_popup).find('input[name="facebook_uid"]').val($("#" + rel + " input[name=facebook_uid]").val());
		$(sel_popup).find('input[name="twitter_uid"]').val($("#" + rel + " input[name=twitter_uid]").val());
		$(sel_popup).find('input[name="nick"]').val($("#" + rel + " input[name=nick]").val());	
		$(sel_popup).find('input[name="password"]').val($("#" + rel + " input[name=password]").val());
		$(sel_popup).find('input[name="target_uid"]').val($("#" + rel + " input[name=target_uid]").val());
		$(sel_popup).find('input[name="uuid"]').val($("#" + rel + " input[name=uuid]").val());
		$(sel_popup).find('input[name="access_token"]').val($("#" + rel + " input[name=access_token]").val());
		$(sel_popup).find('input[name="device_type"]').val($("#" + rel + " input[name=device_type]").val());	
		
		$(sel_popup).find('#later_change').click(function(){
			$(sel_popup).hide();
		})
		
		$(sel_popup).find('#sure_change').click(function(){	
			$(sel_popup).find('form').submit();
			$(sel_popup).hide();
		});
		$(sel_popup).overlay({
			close:"#later_change",
			mask : {
				color:"#011221",
				opacity:0.8
			},
			top:'2%',
			closeOnClick: false,
			load:true
		}).load();
//		$('form#' + rel).submit()
	});
}

device.loadSocial = function(btn_sel, place_type, change_type){
	$(btn_sel).click(function(){
		nativeCall.changeDevice(place_type, change_type)
	});
}

device.loginSocial = function(btn_sel, type, on_flag){
	/***
	 * @param type: facebook or twitter
	 */
	$(btn_sel).click(function(){
		if (on_flag != 1){
			nativeCall.changeDeviceLogin(type)
		}
	});
}

device.logoutSocial = function(btn_sel, type, on_flag){
	/***
	 * @param type: facebook or twitter
	 */
	$(btn_sel).click(function(){
		if (on_flag == 1){
			nativeCall.changeDeviceLogout(type)
		}
	});
}

device.error_status = function(error){
	if(error == '1'){
		alert('Device code existed!')
	}else if(error == '2'){
		alert('Uuid is invalid')
	}else if(error == '3'){
		alert('Selected target ID is invalid')
	}else if(error == '3'){
		alert('Input device code is invalid')
	}else if(error == '4'){
		alert('Device change type is invalid')
	}else if(error == '5'){
		alert('Game ID not found')
	}else if(error == '6'){
		alert('Place change type is invalid')
	}else if(error == '7'){
		alert('User do not own this account')
	}
	return false;
}
