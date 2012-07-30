(function($){
	$.fn.jticker = function(settings){
		$(this).each(function(){
			var obj = this
			var char = 0;
			var caption = $(this).html()
			var t = null
			var fn = {}	
			$(this).html('')
			fn.type = function(){
				var text = caption.substr(0, char++)	
				$(obj).html(text)		
				if(char >= caption.length+1){
					clearTimeout(t)
					return false
					
				}
				t = setTimeout(fn.type, 28)
			}
			
			fn.type()
		})
		
		
		
		
	}

})(jQuery)