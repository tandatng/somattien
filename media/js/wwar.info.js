var info = {}

info.btn_click = function(){
	$('.btn_click').click(function(){
		var rel = $(this).attr('rel')
		location.href = rel;
	});
}

info.btn_submit = function(sel,form_sel){
	$(sel).click(function(){
		$(form_sel).submit();
	})	
}


info.delconfirm = function()
{
//    var answer = confirm("Delete all cheer?")
//    if (answer){
    location.href="/info/flushcheer/"
//    }    
//    return false;  
}  
