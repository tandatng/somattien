var duty = {}

duty.error_status = function(error){
	if(error == '1'){
		alert('Stamina is not enough')
		return false
	}
	if(error == '2'){
		alert('Request stamina is over Given stamina!')
		return false;
	}
	
	if(error == '3'){
		alert('Data master is not valid!')
		return false;
	}
}

duty.drop_box = function(sel){
	$(sel+' .menu_box li').click(function(){
		var rel = $(this).attr('rel')
		//alert(rel)
		$(this).parents('.menu_space').find('input[name="value"]').val(rel)
		
	})
}

duty.btn_check = function(sel){
	$(sel).click(function(){
		var rel = $(this).attr('rel')
		var obj = this
		var doc = $(rel)
		var stage_id = doc.find('input[name="stage_id"]').val()
		var level = doc.find('input[name="level"]').val()
		var link = doc.find('input[name="url"]').val()
		var image_complete = doc.find('input[name="image_complete"]').val()
		var unlock_condition_id = doc.find('input[name="unlock_condition_id"]').val()
		var unlock_condition_id = doc.find('input[name="unlock_condition_id"]').val()
		$.post('/duty/json_checkunlock/'+stage_id+'/'+level+'/'+unlock_condition_id+'/',{},function(data){
			
			if(data.status == "OK"){
				checkComplete_Yes.overlay().load();
				$(obj).parents('.row'+unlock_condition_id).html('<div class=" img_complete"><img src="'+image_complete+'" width="40" /></div>')
			}else{
				$('#jumpto_condtion').html(name);
				$('.popup_btn_ok').click(function(){
					window.location.href=  link;
				})
				checkComplete_No.overlay().load();
			}
			return false
		},'json')
		
	})
	
}