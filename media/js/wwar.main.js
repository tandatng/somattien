var originalAlert = window.alert;
window.sound = false;
window.vibration = false;
wwar.common = function(){}
wwar.common.playSound = function(){
	return window.sound;
}

wwar.common.vibration = function(){
	return window.vibration;
}

window.alert = function() {
	  //Call custom url here
	  try{
		window.jsProxy.showAlert(arguments[0]);
	  }catch(err){
		return originalAlert.apply(this, arguments);  
	  }
};

wwar.common.btn_click = function(selectors,tag_attr){
	$(selectors).click(function(){
		var url = $(this).attr(tag_attr);
		if(url == '') return false;
		location.href = url;
	});
}

//Get browser cookies
wwar.common.cookieGet = function(name){
	var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

wwar.common.sameOrigin = function(url){
	// url could be relative or scheme relative or absolute
    var host = document.location.host; // host + port
    var protocol = document.location.protocol;
    var sr_origin = '//' + host;
    var origin = protocol + sr_origin;
    // Allow absolute or scheme relative URLs to same origin
    return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
        (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
        // or any other URL that isn't scheme relative or absolute i.e relative.
        !(/^(\/\/|http:|https:).*/.test(url));
}

wwar.common.safeMethod = function(method){
	return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

wwar.common.getQuerystring = function(key, default_){
	if (default_==null) default_=""; 
	key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
	var qs = regex.exec(window.location.href);
	if(qs == null)
		return default_;
	else
	    return qs[1];
}


wwar.common.paging = function(){
	var pages = $("#paginator > .num_btn").size();
	if (pages == 0){
		$("#paginator").parents('.nav_group_more').addClass('out');
		return;
	}
	if (pages < 4)
		pages = 4;
	
	var groups = Math.ceil(pages / 4);
	var lWidth = 46;
	
	function showGroup(group){
		mgleft = lWidth * (1 - group) * 4;
		$("#paginator").animate({marginLeft: mgleft + 'px'}, 300);
	}
	
	var isMet = false;
	var p = 0;
	$("#paginator > .num_btn").each(function(){
		if(isMet)
			return;
		p++;
		if($(this).hasClass('currentP')){
			isMet = true;
			if(!$(this).hasClass('transit'))
				$(this).addClass('transit');
		}
			
	});
	var group = Math.ceil(p / 4);
	
	
	showGroup(group);
	$("#paginator").width(lWidth * pages);
	$("#pre_btn").click(function(){
		if(group <= 1)
			group = groups;
		else
			group--;
		showGroup(group)
	});
	$("#next_btn").click(function(){
		if(group >= groups)
			group = 1;
		else
			group++;
		showGroup(group)
	});
}

//Modify header before send ajax, append csrftoken into header
jQuery(document).ajaxStart(function(event, xhr, settings){
	height = window.innerHeight / 2;
	width = window.innerWidth / 2;
	$("#loading_image").css({'top':"'" + height + "px'", 'left':"'"+width+"px'"}).show();
}).ajaxStop(function(event, xhr, settings){
	$("#loading_image").hide();
})
//jQuery(document).ajaxSend(function(event, xhr, settings) {
//	if(!wwar.common.safeMethod(settings.type) && wwar.common.sameOrigin(settings.url)){
//		xhr.setRequestHeader("X-CSRFToken", wwar.common.cookieGet('csrftoken'));
//		if("jsProxy" in window){
//			var access_token = jsProxy.getAccessToken();
//			xhr.setRequestHeader("X-GLOOPS-WWAR-ACCESS-TOKEN", access_token);
//		}
//	}
//})




//jQuery(document).ajaxStart(function())

jQuery(document).ready(function(){
	$('.button_off, .button_8').each(function(){
		obj = $(this);
		if(obj.hasClass('transit') || obj.hasClass('disable')){
			obj.unbind();
		}
	});
	if(window.innerWidth > 320 && window.innerWidth < 1024){
		$('#container, #header').css("zoom", window.innerWidth / 320);
	}
	
	$(".content_remove").jticker({
		cursorList : " ",
		rate : 30,
		delay : 2000
	})
	
	$(".wlby_movie").fadeIn();
	
	nativeCall.showShare(HTTP_SHARE, false);
})

/**
 * Play sound on click
 */

$(".button_off").click(function(){
	//nativeCall.playClickSound();
});
$(".btn_click").click(function(){
	if(!$(this).hasClass('button_off')){
		//nativeCall.playClickSound();
	}
});

/*
 * Combo box event manipulate
 */
$('.drop_down_box').toggle(function(event){
	$('.menu_space').hide()
	$(this).parents('.sort_space').find('.menu_space').slideDown(); 
},function(){
	$(this).parents('.sort_space').find('.menu_space').slideUp()
});
$('.menu_box li').each(function(){
	$(this).bind('mouseover',function(){
		$(".menu_box ._select").removeClass('_select');
		$(this).toggleClass('_select');
	});
	$(this).bind('mouseout',function(){
		
	});
	$(this).click(function(){
		father = $(this).parents('.menu_space')
		father.prev().children('.type_text').html($(this).html())
		father.slideUp();
		$(this).parents('.sort_space').find('.sort_text').html($(this).html())
		$(".menu_box ._select").removeClass('_select');
		$(this).addClass('_select');
	})
});

/*
 * Button manipulate
 * 
 */

$('.button_off:not([disabled])').bind({
	mousedown:function(){
		if($(this).hasClass('transit')){
			return;
		}
		
		if($(this).hasClass('not_implement')){
			alert('Implementing')
			return false;
		}
		
		$(this).addClass('transit')
	},
	mouseup:function(){
		$(this).removeClass('transit')
	}
});


$('.button_8:not([disabled])').bind({
	mousedown:function(){
		$(this).addClass('transit');
	},
	mouseup:function(){
		$(this).removeClass('transit');
	},
})


/* paging number */
$('.num_btn').bind('click',function(){
	$(this).toggleClass('currentP');
});

/* header */
if(document.URL.indexOf('tutorial') == -1){
	$('.nav_btn_click').click(function(){
		var rel = $(this).attr('rel');
		//alert(rel)
		window.location = rel;
	})
};

var common = {}
common.btn_click = function(btn_sel,url){
	$(btn_sel).click(function(){
		window.location = url;
	});
}

common.btn_submit = function(sel,form_sel){
	$(sel).click(function(){
		$(form_sel).submit();
	})
	
}
common.btn_click_attr = function(btn_sel, tag_attr){
	$(btn_sel).click(function(){
		var url = $(this).attr(tag_attr)
		if( url == '') return false;
		window.location = url;
	});
}
common.btn_submit_attr = function(btn_sel, tag_attr){
	$(btn_sel).click(function(){
		var rel = $(this).attr(tag_attr)
		if( rel == '') return false;
		$(rel).submit()
	});
}

/*** help ***/
$('.wrapp_bar_help').click(function(){
	$(this).next().slideUp();
	if ($(this).next().is(':hidden') == true){
		$(".wrapp_info_help").slideUp('fast');
		$(this).next().slideDown('fast');
	}
});
$('.bar_top_help').bind('click',function(){
	$(this).next().slideUp('out');
	if ($(this).next().is(':hidden') == true){
		$(".content_help").slideUp('fast');
		$(this).next().slideDown('fast');
	}
});

common.jword = function (btn_sel, tag_attr){
	$(btn_sel).click(function(){
		target = $(this).attr(tag_attr);
		$(target).click();
	});
}
common.jcontent = function (btn_sel, tag_attr){
	$(btn_sel).click(function(){
		$('.wrapp_info_help').hide()
		$(".content_help").hide()
		$(this).parents('.wrapp_info_help').slideUp()
		target = $(this).attr(tag_attr);
		$(target).slideDown();
	});
}

wwar.common.updateStamina = function(current, max){
	if(current != undefined && max != undefined){
		$("#stamina").html('' + current + '/' + max);
	} else if (current != undefined) {
		$("#stamina").html('' + current + '/' + $("#stamina").html().split('/').pop());
	}
}

wwar.common.updateCoin = function(warcoin){
	$("#warcoin").html(warcoin);
}
