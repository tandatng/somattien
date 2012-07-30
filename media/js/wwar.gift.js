var gift = {}
gift.btn_click = function(btn_sel,url){
	$(btn_sel).click(function(){
		window.location.href = url;
	});
}

gift.sendBack_btn = function(){
 	$(".sendBack_btn").click(function(e){
  		$('#form_submit_send_back').submit();
 	});
}

gift.sayhello_btn = function(){
 	$(".sayhello_btn").click(function(e){
  		$('#form_submit_hello').submit();
 	});
}

gift.get_item_btn =  function(){
 	$(".get_item_btn").click(function(e){
  		$('#form_submit').submit();
 	});
}


gift.page_click = function(){
	$('.paging_click').click(function(){
		var rel = $(this).attr('rel')
		location.href = rel;
	});
}

gift.error_status = function(type){
	if(type == '1'){
		popup.full_deck();
	}else if(type == '2'){
		popup.no_card_master();
	}else if (type == '3'){
		alert("Gift was send to exception");
	}else if (type == '4'){
		alert("Number of card reach to max");
	}else if (type == '5'){
		alert("CardMaster does not exist!");
	}
}
gift.show_popup = function(data,sel_popup){
	$(sel_popup).find('.btn_cancel').click(function(){
		$(sel_popup).hide()
	})
	$(sel_popup).find('.btn_submit').click(function(){
		var form = "#form_submit"+data.equip_id.toString()
		$(form).submit()
	})
	$(sel_popup).show()
}

gift.btn_popup = function(sel,sel_popup){
	$(sel).click(function(){
		var rel = $(this).attr('rel');
		if (rel == '') return false;
		gift.show_popup({'equip_id':rel},sel_popup);
	})
}

/*
gift.animation_end = function(equip_ids){
	var tmp = equip_ids.split('-')
	var len = tmp.length
	if(len == 1){
		window.location.href = '/gift/'
	}else{
		if(index < len - 1) window.location.href = '/gift/complete/'+equip_ids+'/?idx='+(index+1)
		else window.location.href = '/gift/'
			
	}
	
}*/

/*
$(function() {
	$("#form_submit").click(function() {
		alert("hello");
		var id = $("#id").val();
		var name = $("#name").val();
		var who = $("#who").val();
		var date = $("#date").val();
		var dataString = 'id='+ id + '&name=' + name + '&who=' + who + '&date=' + date;
	
		if(id=='' || name=='' || who=='' || date=='')
		{
			$('.success').fadeOut(200).hide();
			$('.error').fadeOut(200).show();
		}
		else
		{
			$.ajax({
			type: "POST",
			url: "/gift/get/",
			data: dataString,
			success: function(){
				$('.success').fadeIn(200).show();
				$('.error').fadeOut(200).hide();
			}
			});
		}
		return false;
	});
});
*/

