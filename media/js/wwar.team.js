var team = {}

function onBlur(el){
    if (el.value == '') {
        el.value = el.defaultValue;
    }
}
function onFocus(el){
    if (el.value == el.defaultValue) {
        el.value = '';
    }
}

team.btn_click = function(){
	$('.btn_click').click(function(){
		var rel = $(this).attr('rel')
		location.href = rel;
	});
}
team.btn_click_attr = function(btn_sel, tag_attr){
	$(btn_sel).click(function(){
		var url = $(this).attr(tag_attr)
		if( url == '') return false;
		window.location.href = url;
	});
}
team.btn_submit =  function(btn, form){
 	$(btn).click(function(e){
  		$(form).submit();
 	});
}

team.show_popup_join = function(data,sel_popup){
	$(sel_popup).find('input[name="teamId"]').val(data.teamId)
	$(sel_popup).find('.pcancel_btn').click(function(){
		$(sel_popup).hide()
	})
	$(sel_popup).find('.pok_btn').click(function(){
		$(sel_popup).find('.team_join_btn').removeClass('button_off')
		$(sel_popup).find('.team_join_btn').addClass('button_off_disabled')
		$(sel_popup).find('form').submit()		
	})
	$(sel_popup).show()
}

team.btn_popup_join = function(sel,sel_popup){
	$(sel).click(function(){
		var rel = $(this).attr('rel');
		if (rel == '') return false;
		team.show_popup_join({'teamId':rel },sel_popup);
	})
}
	
team.deny_btn = function(){
  $("#member_space .deny_btn").click(function(e){
	  $('#form_submit').append('<input type="hidden" name="action_name" value="d"/>');
	  $('#form_submit').submit();
  });
}
 
team.accept_btn = function(){
  $("#member_space .accept_btn").click(function(e){
	  $('#form_submit').append('<input type="hidden" name="action_name" value="a"/>');
	  $('#form_submit').submit();
  });
}


team.show_popup_invest = function(data,sel_popup){
	$(sel_popup).find('input[name="teamId"]').val(data.teamId)
	$(sel_popup).find('input[name="gil"]').val(data.gil)
	$(sel_popup).find('.popup_val').html(data.gil)
	$(sel_popup).find('.pcancel_btn').click(function(){
		$(sel_popup).hide()
	})
	$(sel_popup).find('.pok_btn').click(function(){
		$(sel_popup).find('form').submit()		
	})
	var allStatPopup =  $(sel_popup).overlay({
		close : ".no_popup",
		mask : {
			color:"#011221",
			opacity:0.8
		},
	});
	allStatPopup.overlay().load();
}

//team.btn_popup_invest = function(sel,sel_popup){
//	$(sel).click(function(){
//		var rel = $(this).attr('rel');
//		var val = rel.split('|');
//		teamId 		= val[0];
//		gil 		= val[1];
//		if (rel == '') return false;
//		team.show_popup_invest({'teamId':teamId,'gil':teamId },sel_popup);
//	})
//}

/* drop down search box **/ 
//team.load_dropbox = function(){
//	$('.sort_box').bind('click',function(){
//		$('.sort_type_space').toggleClass('blind');
//	});
//	$(".drop_down_box li").each(function(){
//		$(this).bind('mouseover',function(){
//			$(this).toggleClass('_select');
//		});
//		$(this).bind('mouseout',function(){
//			$(this).toggleClass('_select');
//			//$('.sort_type_space').toggleClass('blind');
//		});
//		$(this).click(function(){
//			var rel = $(this).attr('rel');
//			//alert(rel);
//			//$(this).parent().find('li').removeClass
//			//$(this).parent().find('li').addClass('_select')
//			//$(this).removeClass('_select');
//			//alert($(this).html());
//			$('form#sort_form1 input[name="gil"]').val(rel)
//			$('.sort_type_text').html($(this).html())
//			
//			$('.sort_type_space').toggleClass('blind');
//		})
//	})
//
//
//	/* drop down search box for team invest page**/ 
//	$('.sort_type_btn1').bind('click',function(){
//		$('.sort_type_space1').toggleClass('blind');
//	});
//	$(".drop_down_box1 li").each(function(){
//		$(this).bind('mouseover',function(){
//			$(this).toggleClass('_select');
//		});
//		$(this).bind('mouseout',function(){
//			$(this).toggleClass('_select');
//			//$('.sort_type_space').toggleClass('blind');
//		});
//		$(this).click(function(){
//			var rel = $(this).attr('rel');
//			//alert(rel);
//			//$(this).parent().find('li').removeClass
//			//$(this).parent().find('li').addClass('_select')
//			//$(this).removeClass('_select');
//			//alert($(this).html());
//			$('form#sort_form2 input[name="gil"]').val(rel)
//			$('.sort_type_text1').html($(this).html())
//			
//			$('.sort_type_space1').toggleClass('blind');
//		})
//	})
//}
team.load_dropbox = function(){
	$('#invest_gil').bind('click',function(){
		$('#gil_team').toggleClass('blind');
	});
	$(".drop_down_gil li").each(function(){
		$(this).bind('mouseover',function(){
			$(this).toggleClass('_select');
		});
		$(this).bind('mouseout',function(){
			$(this).toggleClass('_select');
			//$('.sort_type_space').toggleClass('blind');
		});
		$(this).click(function(){
			var rel = $(this).attr('rel');
			//alert(rel);
			//$(this).parent().find('li').removeClass
			//$(this).parent().find('li').addClass('_select')
			//$(this).removeClass('_select');
			//alert($(this).html());
			$('form#sort_form1 input[name="gil"]').val(rel)
			$('#gil_text_team').html($(this).html())
			
			$('#gil_team').toggleClass('blind');
		})
	})
	
	$('#invest_ts').bind('click',function(){
		$('#treasure_team').toggleClass('blind');
	});
	$(".drop_down_treasure li").each(function(){
		$(this).bind('mouseover',function(){
			$(this).toggleClass('_select');
		});
		$(this).bind('mouseout',function(){
			$(this).toggleClass('_select');
			//$('.sort_type_space').toggleClass('blind');
		});
		$(this).click(function(){
			var rel = $(this).attr('rel');
			//alert(rel);
			//$(this).parent().find('li').removeClass
			//$(this).parent().find('li').addClass('_select')
			//$(this).removeClass('_select');
			//alert($(this).html());
			$('form#sort_form1 input[name="gil"]').val(rel)
			$('#treasure_text_team').html($(this).html())
			
			$('#treasure_team').toggleClass('blind');
		})
	})
}
function checkForm(doc, sel_popup, type, exchangeRate){
	if(doc.gil.value == ""){
		if (type == "g"){
			alert('Please choose Ghyll amount!')		
		}else if (type == "b"){
			alert('Please choose Blueprint!')				
		} 
		return false
	}
	if(type == "g"){ 
		team.show_popup_invest({'gil':doc.gil.value,'teamId':doc.teamId.value},sel_popup)
	}else if (type == "b"){
		var blueprint = doc.gil.value * exchangeRate
		team.show_popup_invest({'gil':blueprint,'teamId':doc.teamId.value},sel_popup)		
	}
	return false
}

team.error_status = function(type){
	if(type == 1){
		alert("You don't have enough Candy(s) to invest.");
	}	
}
team.error_remove = function(type){
	if(type == 1){
		alert("Can not remove owner of team");
	}	
}
team.error_edit = function(type){
	if(type == 1){
		alert("maximum 12 characters");
	}	
}

team.error_invite = function(type){
	switch(type){
	case -1:
		alert("You've already been in this team.");
		break;
	case -2:
		alert("You've already been in another team.");
		break;
	case -3:
		alert("You have to quit current team first.");
		break;
	case -4:
		alert("This team has been full.");
		break;
	case -5:
		alert("Reached limitation request per week.");
		break;
	default:
		return;
	}
}
