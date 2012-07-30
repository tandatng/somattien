function boss(){
	this.stage_id = 0;
	this.level    = 0;
	this.duty_id  = 0;
}

boss.prototype.init = function(func){
	this.getInfo();
	switch(func){
		case 'boss_index':
			this.initIndex();
			break;
		case 'boss_addmember':
			this.initAddmember();
			break;
		case 'boss_fight':
			this.initFight();
			break;
		case 'boss_win':
			this.initWin();
			break;
		default:
			break;
	}
}

boss.prototype.initWin = function(){
	var _boss = this;
	
	nativeCall.vibrate();
	
	$("#giftDiv").click(function(){
		location.href = '/gift/';
	});
	
	$("#stage_next_btn").click(function(){
		location.href = '/duty/stage/' + _boss.stage_id + '/' + _boss.level + '/';
		return false;
	});
}

boss.prototype.initFight = function(){
	var _boss = this;
	
	this.currentAnimation = 'opening';
	this.animationTimes = {
		'opening' : 2700,
		'battle' : 2100,
		'win' : 2100,
		'lose' : 1900,
		'recovery' : 1400
	}
	
	$("#pcancel_btn").click(function(){
		$("#recoverDiv").addClass('out');
	});
	
	$("#pok_btn").click(function(){
		_boss.recover();
	});
}

boss.prototype.initFightPlayAni = function(){
	var _boss = this;
	this.playAnimation('opening', function(){
		_boss.attack();
	});
}

boss.prototype.playAnimation = function(animation, func){
	var href = $("#animationStyle").attr('href');
	regx = new RegExp(this.currentAnimation,'g');
	href = href.replace(regx, animation);
	$("#animationStyle").attr('href', href);
	
	$("#" + this.currentAnimation + "Ani").hide();
	this.currentAnimation = animation;
	$("#" + this.currentAnimation + "Ani").show();
	if(typeof func == 'function'){
		if(typeof this.animationTimes[animation] != 'undefined')
			setTimeout(func, this.animationTimes[animation]);
		else
			func();	
	}
	
}

boss.prototype.getId = function(){
	return this.stage_id + '/' + this.level + '/' + this.duty_id + '/'
}

boss.prototype.getInfo = function(){
	mainDiv = $("#training_content");
	info = mainDiv.attr('class').split('_');
	this.stage_id = info[1];
	this.level    = info[2];
	this.duty_id  = info[3];
}

boss.prototype.initIndex = function(){
	_boss = this;
	$(".Tadd_unit_btn").click(function(){
		if($(this).hasClass('disabled')){
			alert('You have no available teammates to add.')
			return false;
		}
		location.href = '/duty/boss_addmember/' + _boss.getId()
		return false;
	});
	
	$(".Tchange_member_btn").click(function(){
		if($(this).hasClass('disabled')){
			alert('You have no available teammates to change.')
			return false;
		}
		var stt = this.id.split('_').pop();
		location.href = '/duty/boss_addmember/' + _boss.getId() + '?c=' + stt;
		return false;
	});
	
	$(".special_mission_btn").click(function(){
		location.href = '/duty/boss_fight/' + _boss.getId();
		return false;
	});
	
	$("#make_unit_btn").click(function(){
		location.href = '/unit/main/?refer_url=/duty/boss/'+ _boss.getId();
		return false;
	});
}

boss.prototype.initAddmember = function(){
	_boss = this;
	var c = $(".training_choose_member").attr('id').split('_').pop()
	wwar.common.paging();
	
	$("#paginator > .num_btn").click(function(){
		location.href = '/duty/boss_addmember/' + _boss.getId() + '?p=' + $(this).html() + '&c=';
		return false;
	});
	
	$(".Tcall_btn").click(function(){
		var uid = this.id.split('_').pop();
		location.href = '/duty/boss_doaddmember/' + _boss.getId() + '?uid=' + uid + '&c=' + c;
		return false;
	});
}

/**
 * User attack boss
 */
boss.prototype.attack = function(){
	return false;
	var attackAjaxDone = false;
	var attackAniDone = false;
	var attackResponse = null;
	var _boss = this;
	
	var ids = ['user_0', 'user_1', 'user_2'];
	var canAttack = false
	for(var x in ids)
		if($("#" + ids[x] + " .percen_bar").width() > 0)
		{
			canAttack = true;
			break;
		}
	if(!canAttack){
		_boss.playAnimation('waitting', function(){
			_boss.enableButtons();
		});
		return false;
	}
	
	this.disableButtons();
	
	$.ajax({
		url: '/duty/boss_attack/' + this.getId(),
		type: 'POST',
		cache: false,
		success: function(data){
			attackAjaxDone = true;
			attackResponse = data;
			if(attackAniDone){
				_boss.updateHp(attackResponse);
			}
		}
	});
	
	this.playAnimation('battle', function(){
		attackAniDone = true;
		if(attackAjaxDone){
			_boss.updateHp(attackResponse);
		}
	});
}

boss.prototype.updateHp = function(data){
	var _boss = this;
	if(typeof data['error'] != 'undefined'){
		alert(data['error']);
		_boss.playAnimation('waitting', function(){
			_boss.enableButtons();
		});
		return false;
	}
	if(typeof data.boss != 'undefined')
		$("#boss_hp .percen_bar").animate({
			width: data.boss * $("#boss_hp .stamina_bar").width() / 100 + 'px'
		}, 500); //0.5 second
	
	var ids = ['user_0', 'user_1', 'user_2'];
	for(var x in ids)
		$("#" + ids[x] + " .percen_bar").animate({
			width: data[ids[x]] * $("#" + ids[x] + " .stamina_bar").width() / 100 + 'px'
		}, 500); //0.5 second
	
	if(typeof data['boss_status'] != 'undefined')
		setTimeout(function(){
			wwar.common.updateStamina(data['stamina']);
			if(typeof data['coin'] != 'undefined'){
				wwar.common.updateCoin(data['coin']);
			}
			if(data['boss_status'] == 0){ //continue
				_boss.playAnimation('waitting', function(){
					_boss.enableButtons();
				});
			} else if(data['boss_status'] == 1){ //user win
				_boss.playAnimation('win', function(){
					if(typeof data['end_stage'] != 'undefined' && data['end_stage']){
						location.href = '/duty/boss_comp/' + _boss.getId()
					} else {
						location.href = '/duty/boss_win/' + _boss.getId()
					}
				});
			} else {
				_boss.playAnimation('lose', function(){
					location.href = '/duty/boss/' + _boss.getId()
				});
			}
		}, 500); //after decrease hp
}

boss.prototype.showRecover = function(){
	$("#recoverDiv").removeClass('out');
}

boss.prototype.hideRecover = function(){
	$("#recoverDiv").addClass('out');
}

boss.prototype.recover = function(){
	this.hideRecover();
	var _boss = this;
	
	var recoverAjaxDone = false;
	var recoverAniDone = false;
	var hp = null;
	this.disableButtons();
	
	$.ajax({
		url: '/duty/boss_recover/' + _boss.getId(), 
		type: 'POST',
		cache: false,
		success: function(data){
			recoverAjaxDone = true;
			if(recoverAniDone){
				_boss.updateHp(data);
			} else {
				hp = data;
			}
		}
	});
	_boss.playAnimation('recovery', function(){
		recoverAniDone = true;
		if(recoverAjaxDone){
			_boss.updateHp(hp);
		}
	});
}

function attackBoss(){
	wwar.duty.boss.attack();
}

function useRecover(){
	wwar.duty.boss.showRecover();
}

boss.prototype.disableButtons = function(){
	$("#Tatack_btn").unbind('click', attackBoss);
	$("#Trecover_btn").unbind('click', useRecover);
}

boss.prototype.enableButtons = function(){
	$("#Tatack_btn").click(attackBoss);
	$("#Trecover_btn").click(useRecover);
}

if(typeof wwar == 'undefined')
	wwar = {};
if(typeof wwar.duty == 'undefined')
	wwar.duty = {};
wwar.duty.boss = new boss();