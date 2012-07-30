nativeCall = {}
nativeCall.execute = function(url){
	try{
		console.log('gloops://wwar/' + url) //for testing purpose	
	}
	catch(e){
		
	}
	location.href = 'gloops://wwar/' + url //move webview to gloops url -> native will catch this and execure other code
}

/**
 * call native invite 
 * @param from : string | 'facebook' or 'twitter'
 * @param share_id : integer | share_master_id
 */
nativeCall.invite = function(from, share_id){
	nativeCall.execute('invite/' + from + '/' + share_id)
}
/**
 * call native show contact list
 */
nativeCall.inviteContact = function(){
	nativeCall.execute('invite/contact')
}
/**
 * call native show email form
 */
nativeCall.inviteEmail = function(){
	nativeCall.execute('invite/email')
}
/**
 * call native show mms form
 */
nativeCall.inviteMms = function(){
	nativeCall.execute('invite/mms')
}

/**
 * call native login
 * @param from : string | 'facebook' or 'twitter'
 */
nativeCall.login = function(from){
	nativeCall.execute('login/' + from)
}
/**
 * call native logout
 * @param from : string | 'facebook' or 'twitter'
 */
nativeCall.logout = function(from){
	nativeCall.execute('logout/' + from)
}
/**
 * show loading
 */
nativeCall.showLoading = function(){
	nativeCall.execute('loading/start');
}
/*
 * hide loading
 */
nativeCall.hideLoading = function(){
	nativeCall.execute('loading/stop')
}

nativeCall.changeDevice = function(place_type, change_type){
	/***
	 * @param place_type: 1: from top page of none user, 2: from setting
	 * @param change_type: 1: load by facebook, 2: load by twitter
	 */
	if (place_type == 1){
		nativeCall.execute('auth/device/change/sign_in/' + place_type + '/' + change_type)
	}else if(place_type == 2){
		nativeCall.execute('device/change/sign_in/' + place_type + '/' + change_type)
	}
	/*if (place_type == 1){
		
		 * change_type=1 => connect to fb, redirect to URL in execute function with info: facebook_uid, facebook_token, uuid also put in header
		 * change_type=2 => connect to tw, redirect to URL in execute function with info: twitter_uid, twitter_token, uuid also put in header
		 * redirect to http://game_url/auth/device/change/sign_in/' + place_type
		
		nativeCall.execute('auth/device/change/sign_in/' + place_type + '/' + change_type)
	}else if(place_type == 2){
		
		 * change_type=1 => connect to fb, redirect to URL in execute function with info: facebook_uid, facebook_token, facebook_nick, uuid also put in header
		 * change_type=2 => connect to tw, redirect to URL in execute function with info: twitter_uid, twitter_token, facebook_nick, uuid also put in header
		 * redirect to http://game_url/auth/device/change/sign_in/' + place_type + '/' + change_type
		
		nativeCall.execute('auth/device/change/sign_in/' + place_type)
	}*/
}

nativeCall.changeDeviceLogin = function(from){
	/***
	 * @param from: facebook or twitter
	 * nativeCall.execute('login/' + from)
	 * redirect to http://game_url/auth/device/change
	 */
	nativeCall.execute('device/change/' + from + '/login')
}

nativeCall.changeDeviceLogout = function(from){
	/***
	 * @param from: facebook or twitter
	 * nativeCall.execute('logout/' + from)
	 * redirect to http://game_url/auth/device/change
	 */
	nativeCall.execute('device/change/' + from + '/logout')
}

nativeCall.doFight = function(data){
	var url = 'battle/?'
	var params = ''
	for(var x in data){
		if(params)
			params += '&'
		params += x + '=' + data[x]
	}
	if(typeof jsProxy != 'undefined' && typeof jsProxy.startBattleAnimation != 'undefined')
		jsProxy.startBattleAnimation(params);
	else
		nativeCall.execute(url + params);
}

nativeCall.inappPurchase = function(master_coin_id){
	nativeCall.execute('payment/inapp_purchase/' + master_coin_id);
}

//call native alert
nativeCall.showAlert = function(string){
	var url = 'alert/?string=';
	nativeCall.execute(url + string);
}

//play sound
nativeCall.playClickSound = function(){
	if(typeof jsProxy != 'undefined'){
		jsProxy.playSound();
	} else {
		window.sound = true;
//		nativeCall.execute('playSound');		
	}
}

nativeCall.vibrate = function(){
	if(typeof jsProxy != 'undefined'){
		jsProxy.vibrate();
	} else {
		window.vibration = true;
//		nativeCall.execute('vibrate')
	}
}

nativeCall.showRate = function(){
	if(typeof jsProxy != 'undefined'){
		jsProxy.showRate();
	} else {
		nativeCall.execute('showRate')
	}
}

nativeCall.showShare = function(share_id, refresh){
	if(!share_id)
		return false;
	if(typeof jsProxy != 'undefined'){
		jsProxy.showShareDialog(share_id, refresh);
	} else {
		var refresh_num = refresh ? 1 : 0;
		nativeCall.execute('showShareDialog/' + share_id + '/' + refresh_num);
	}
}

//play sound for duty anim
nativeCall.playDutyAnimationSound = function(){
	if(typeof jsProxy != 'undefined'){
		jsProxy.playDutySound();
	} else {
		nativeCall.execute('playDutySound')
	}
}
