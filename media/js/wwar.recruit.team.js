$(document).ready(function(){
	var error = wwar.common.getQuerystring('error')
	if (error == -1){
		alert("You don't have right to modify");
	}else if(error == -2){
		alert("Data not exist.");
	}
})


$('.Tsearch_btn').click(function(){
	$('#infoForm').submit();
})

$("#infoDropLevel li").click(function(){
	var rel = $(this).attr('rel');
	$('#info_user_level').val(rel);
})

$("#infoDropPlaystyle li").click(function(){
	var rel = $(this).attr('rel');
	$('#info_user_playstyle').val(rel);
})

$("#teamRemove").click(function(){
	$.ajax({
		url:"/recruit/team/manage/remove",
		success:function(data){
			if(data == -1){
	        	alert("You don't have right to modify")
	        	window.location.href = '/recruit/team/1';
	        }else if(data == 'True'){
	        	alert("User has been removed successfull.");
	        	window.location.href = '/recruit/team/manage';
	        }else{
	        	alert("Something wrong with server. Please try again later.");
	        }
		}
	})
});

$(".join_team_btn").click(function(){
	rel = $(this).attr('rel');
	$.ajax({
		url:"/recruit/team/apply/"+rel,
		success:function(data){
			alert(data)
		}
	})
})

$("#teamUpdate").click(function(){
	$("#teamUpdateForm").submit();
})

$('#teamUpdateForm').ajaxForm({ 
    success: function(data) { 
        if(data == -1){
        	alert("You don't have right to modify")
        	window.location.href = '/recruit/team/1';
        }else if(data == -2){
        	alert("Data not exist to be updated.")
        	window.location.href = '/recruit/team/1';
        }else if(data == 'True'){
        	alert("Data has been modify successfull.");
        	window.location.href = '/recruit/team/manage';
        }else{
        	alert("Something wrong with server. Please try again later.");
        }
    } 
}); 
/**** COMBOBOX ****/
$(".note_select").click(function(){
	var rel = $(this).attr('rel');
	$(rel).val();
	$(this).children('span').text('All');
})

$("#infoDropLevel li").click(function() {
	var rel = $(this).attr('rel');
	var title = $(this).html();
	var short_val = $(this).attr('title');
	$('#gil_text_team').text(title);
	$('#info_team_level').val(rel);
	$("#icon_select_level span").text(short_val);
})

$("#infoDropPlaystyle li").click(function() {
	var rel = $(this).attr('rel');
	var title = $(this).html();
	var short_val = $(this).attr('title');
	$('#info_team_playstyle').val(rel);
	$('#gil_text_team').text(title);
	$("#icon_select_style span").text(short_val);
})

$('.drop_down_box_multi').click(function(event) {
	$('.menu_space').hide();
	dropObj = $(this).data('drop')
	menu = $('#' + dropObj);
	if (menu.parent().is(':hidden')) {
		
		menu.parent().slideDown();
	} else {
		menu.parent().slideUp();
	}
});

$('.menu_box_multi li').each(
		function() {
			$(this).unbind().mouseover(function() {
				$(this).toggleClass('_select');
			}).mouseout(function() {
				$(this).toggleClass('_select');
			}).click(
					function() {
						obj = $(this);
						father = obj.parents('.menu_space');
						father.prev().children('.type_text').html(obj.attr('title'));
						$('.drop_down_box_multi').data('drop',obj.attr('rel'));
						father.slideUp();
						$('#gil_text_team').text('None');
					});
		});
