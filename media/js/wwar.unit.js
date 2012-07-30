var unit = {}
unit.show_popup = function(data,sel_popup){
	$(sel_popup).find('input[name="equip_id"]').val(data.equip_id)
	$(sel_popup).find('.btn_cancel').click(function(){
		$(sel_popup).hide()
	})
	$(sel_popup).find('.btn_submit').click(function(){
		$(sel_popup).find('form').submit()
	})
	$(sel_popup).show()
}

unit.btn_popup = function(sel,sel_popup){
	$(sel).click(function(){
		var rel = $(this).attr('rel');
		if (rel == '') return false;
		item.show_popup({'equip_id':rel},sel_popup);
	})
}
$("#sortVal li").click(function(){
	var rel = $(this).attr('rel');
	$('#sort_id').val(rel);
})
//unit.load_dropbox = function(){
//	/* drop down search box **/ 
//	$('.sort_type_btn').bind('click',function(){
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
////			alert(rel);
//			//$(this).parent().find('li').removeClass
//			//$(this).parent().find('li').addClass('_select')
//			//$(this).removeClass('_select');
//			//alert($(this).html());
//			$('form#sort_form input[name="sort_id"]').val(rel)
//			$('.sort_type_text').html($(this).html())
//			
//			$('.sort_type_space').toggleClass('blind');
//		})
//	});
//}
//
unit.btn_checkbox	= function(sel){
	$(sel).click(function(){
		var rel = $(this).attr('rel')
		$('.btn_'+rel).toggleClass('blind');	
	})
}

unit.drop_box = function(sel){
	$(sel+' .menu_box li').click(function(){
		var rel = $(this).attr('rel')
		$(this).parents('.menu_space').find('input[name="sort_id"]').val(rel)
		
	})
}