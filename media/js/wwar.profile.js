/*
 * 
 * Profile 
 * 
 */
var profile= {}


profile.sendNewChat = function(doc){
	if(doc.message.value == ''){
		alert('Please input your message!')
		return false;
	}
	
}
profile.btn_click = function(sel,url){
	$(sel).click(function(){
		location.href =  url;
	});
	
}
profile.status_update = function(doc){
	if(doc.message.value == ''){
		alert('Please input your message!')
		return false;
	}
}
// click to set status
profile.set_status = function(){
	$('#profile_set_status').click(function(){
		location.href = '/profile/status'
	});
}

profile.btn_submit = function(btn_sel,form_sel){
	$(btn_sel).click(function(){
		$(form_sel).submit();
		
	});
}

profile.delete_chat = function(){
	$('.MP_chat_box1').bind('click',function(){
		var rel = $(this).attr('rel');
		if(rel != '0')	window.location.href="/profile/message/"+$(this).attr('rel');
	});
}

profile.goback = function(url){
	$('#btn_back,.btn_back').click(function(){
		if(url) window.location.href= url
		else window.location.href= '/profile/'
	})
}
profile.btn_remove = function(){
	
	$('.MP_remove_btn').bind('click',function(){
		$('form#form_submit_remove').submit();
	});
}
profile.morechat = function(){
	
	$('.MP_more_btn').bind('click',function(){
		window.location.href="/profile/chat";
	});
}

profile.show_popup = function(data,sel_popup){
	$(sel_popup).find('.friend_name').html(data.name)
	$(sel_popup).find('.btn_submit').click(function(){		
		window.location.href="/friends/executeRemove/"+data.id+"/";
	})
	$(sel_popup).overlay({
		close:".btn_cancel",
		mask : {
			color:"#011221",
			opacity:0.8
		},
		top:'2%',
		closeOnClick: false,
		load:true
	}).load();
}

profile.btn_popup = function(sel,sel_popup){
	$(sel).click(function(){
		var rel = $(this).attr('rel');
		val = rel.split('|');
		id 					= val[0];
		name 				= val[1];
		if (rel == '') return false;
		profile.show_popup({'name':name,'id':id },sel_popup);
	})
}

