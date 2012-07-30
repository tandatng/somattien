var cheer = {}
cheer.send_btn = function(){
	  $("#send_btn").click(function(e){
		  $(this).parents('form').submit();
	  });
}

cheer.btn_click = function(){
	$('.AP_cancel_btn').click(function(){
		var rel = $(this).attr('rel')
		location.href = rel;
	});
}