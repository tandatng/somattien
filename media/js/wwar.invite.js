function invite(){
	this.shareBlock = null;
}

/**
 * This function will be call when initial invite page
 */
invite.prototype.init = function(from){
	if(from != null){
		var shareBlock = $('#message_space > .message_holder:first')[0];
		this.shareBlock = shareBlock;
		function shareInvite(){
			if(!$('.checked_icon', shareBlock).hasClass('out')){
				return false; //already share
			}
			var share_id = shareBlock.id.split('_').pop();
			nativeCall.invite(from, share_id);
			return false; //disable default action
		}
		$(shareBlock).live('click', function(){
			shareInvite();
		});
		
		$('#btnShareInvite').click(function(){
			shareInvite();
		});
	
		$('#sign_in_space').click(function(){
			nativeCall.login(from);
		});
	}
	
	$('#fb_btn').click(function(){
		location.href = '/invite/'
	});
	
	$('#tw_btn').click(function(){
		location.href = '/invite/twitter'
	});
	
	$('#mail_btn').click(function(){
		location.href = '/invite/mail'
	});
	
	$('#fr_btn').click(function(){
		location.href = '/invite/friend'
	});
	
	$("#btnHowToInvite").click(function(){
		location.href = '/invite/howto'
	});
	
	
	$("#btnInviteContact").click(function(){
		nativeCall.inviteContact()
	});
	
	
	$("#btnInviteEmail").click(function(){
		nativeCall.inviteEmail()
	});
	
	
	$("#btnInviteMms").click(function(){
		nativeCall.inviteMms()
	});
	
	$("#btnAddGameid").click(function(){
		var gameId = $("#friendGameId").val();
		if(!gameId)
			return false;
		$('.notice_box').addClass('out');
		$('.notice_box:last').removeClass('out');
		$.ajax({
			url : '/invite/add_game_id',
			method: 'POST',
			data: {'game_id' : gameId},
			success: function(data){
				var status = parseInt(data.status);
				$('.notice_box').addClass('out');
				switch(status){
					case 1: //success
						$('#msgSuccess').removeClass('out');
						$("#friendGameId").val(''); //reset so that user can easier to enter more code
						break;
					case 2: //invalid
						$('#msgInvalid').removeClass('out');
						break;
					case 3: //exists
						$('#msgExists').removeClass('out');
						break;
					case 4: //exists
						$('#msgSelfAdd').removeClass('out');
						break;
					case 5: //exists
						$('#msgErrorElse').removeClass('out');
						break;
					default:
						break;
				}
				$('.notice_box:last').removeClass('out'); //show last message
			}
		});
		return false;
	});
}

/**
 * Set finish invite
 * => show checked icon
 */
invite.prototype.finish = function(){
	$('.checked_icon', this.shareBlock).removeClass('out');
	$('#btnShareInvite').hide();
}

invite.prototype.share = function(){
	if(!$('.checked_icon', this.shareBlock).hasClass('out')){
		return false; //already share
	}
	var share_id = this.id.split('_').pop();
	nativeCall.invite(from, share_id);
	return false; //disable default action
}


if(typeof wwar == 'undefined'){
	wwar = function(){}
}
wwar.invite = new invite();
