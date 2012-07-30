function library(){
	this.sort1 = null;
	this.sort2 = null;
}

library.prototype.init = function(){
	var _library = this; //for inside
	var btnLibrary = $("#library_btn");
	if(btnLibrary.size()){
		btnLibrary.click(function(){
			history.go(-1);
			return false;
		});
		return; // end for library detail
	}
	var typeId = 0;
	var sortId = 1;
	
	$("#sort_type_space li").click(function(){
		sortId = $(this).attr('rel');
	});
	
	$("#sort_btn").click(function(){
		location.href = '/library/?c=' + typeId + '&s=' + sortId;
		return false;
	});
	
	$("#cardList > *").click(function(){
		if(this.id){
			var equip_id = this.id.split('_').pop()
			location.href = '/library/detail/' + equip_id + '/?c=' + typeId
		}
		return false;
	});
	
	$("#card_type_space > *").click(function(){
		var typeId = this.id.split('_').pop()
		location.href = '/library/?c=' + typeId
		return false;
	});
	
	$("#paginator > .num_btn").click(function(){
		location.href = '/library/?c=' + typeId + '&s=' + sortId + '&p=' + $(this).html();
		return false;
	});
	
	//paginator
	wwar.common.paging();
}

library.prototype.drop_box = function(sel){
	$(sel+' .menu_box li').click(function(){
		var rel = $(this).attr('rel')
		//alert(rel)
		$(this).parents('.menu_space').find('input[name="sort_id"]').val(rel)
		
	})
}

if(typeof wwar == 'undefined'){
	wwar = function(){}
}
wwar.library = new library();