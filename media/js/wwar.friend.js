var friend = {}
friend.btn_click = function(){
	$('.btn_click').click(function(){
		var rel = $(this).attr('rel')
		location.href = rel;
	});
}

friend.deny_btn = function(sel, tag_attr){
	$(sel).click(function(e){
		var rel = $(this).attr(tag_attr)
		if( rel == '') return false;
		$(rel).append('<input type="hidden" name="action_name" value="d"/>');
		$(rel).submit()
	});
}
 
friend.accept_btn = function(sel, tag_attr){
  $(sel).click(function(e){
	  var rel = $(this).attr(tag_attr)
	  if( rel == '') return false;
	  $(rel).append('<input type="hidden" name="action_name" value="a"/>');
	  $(rel).submit();
  });
}


friend.error_status = function(type){
	if(type == 1){
		alert("Sender has reach the maximum number of friends");
	}
	else if(type == 2){
		alert("Receiver has reach the maximum number of friends");
	}
	else if(type == 3){
		alert("Friend request has already sent before");
	}
}