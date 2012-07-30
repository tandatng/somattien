function battle(){
	this.loading = false;
	this.page = null;
	this.deck_id = null;
}

battle.prototype.init = function(func){
	this.page = func;
	switch(func){
		case 'fight':
			this.initFight();
			break;
		case 'blueprint':
			this.initBtBlueprint();
			break;
		case 'revenge':
			this.initBtRevenge();
			break;
		case 'result':
			this.initResult();
			break;
		default:
			break;
	}
	
	this.attachEventButtons();
}

battle.prototype.initResult = function(){
	$("#fight_more_btn").click(function(){
		var ref = $("#battle_fighting_content").attr('class');
		switch(ref){
			case 'regular':
				location.href = '/battle/';
				return false;
			default:
				location.href = '/battle/' + ref + '/';
				return false;
		}
	});
	
	$("#reload_ammo_btn").click(function(){
		$("#recoverDiv").overlay({
			close: "#pcancel_btn",
			mask : {
				color:"#011221",
				opacity:0.8
			},
			top:'28%',
			closeOnClick: true,
			load:true
		}).load();
		return false;
	});
	$("#pok_btn").click(function(){
		if($("#recoverDiv").hasClass('jump')){
			var ref = $("#battle_fighting_content").attr('class');
			location.href = '/shop/list/b/0/?ref=/battle/' + ref + '/'; //maybe we should let a constant fpr 3
			return false;	
		} else {
			$("#use_item").submit();
		}
	});
}

battle.prototype.initBtRevenge = function(){
	wwar.common.paging();
	$("#paginator > .num_btn").click(function(){
		location.href = '/battle/revenge/?p=' + $(this).html();
	});
	
}

battle.prototype.initBtBlueprint = function(){
	wwar.common.paging();
	
	$("#bP_holder > *").click(function(e){
		var equip_id = this.id.split('_').pop();
		var info = $("#battle_content").attr('class').split('_');
		location.href = '/battle/blueprint/' + info[1] + '/' + info[2] + '/' + equip_id + '/';
		return false;
	});
	
	$("#paginator > .num_btn").click(function(){
		var info = $("#battle_content").attr('class').split('_');
		location.href = '/battle/blueprint/' + info[1] + '/' + info[2] + '/' + info[3] + '/?p=' + $(this).html();
		return false;
	});
	
	$("#blueprint_series_select").click(function(){
		location.href = '/blueprint/'
		return false;
	});
}

battle.prototype.initFight = function(){
	var _battle = this;
	
	$("#fight_more_btn").click(function(){
		location.href = '/battle/' + $("#master_page_bg_3").attr('class') + '/'
		return false;
	});
	
	$("#edit_deck_btn").click(function(){
		location.href = '/deck/?refer_url=/battle/fight/' + $("#battle_fighting_content").attr('class').split('_').slice(1).join('/') + '/';
		return false;
	});	
	
	$("#fight_btn").click(function(){
		_battle.fight();
	});
	
	$("#deck_holder li").click(function(){
		var deck_id = this.id.split('_').pop();
		_battle.changeDeck(deck_id);
	});
	
	this.deck_id = $("#deck_holder").attr('class').split('_').pop();
	
	$("#deck_holder").click(function(){
		$("#treasure_macth").slideToggle();
	});
	
	$("#treasure_macth li").click(function(){
		$("#treasure_text_macth").html($(this).html());	
	});
	
	
	$("#treasure_macth").slideToggle(function(){
		$("#treasure_macth").removeClass('blind');
	});
}

battle.prototype.changeDeck = function(deck_id){
	if(this.deck_id == deck_id)
		return false;
	this.deck_id = deck_id;
	$("#card_holder").html('Loading ...');
	$.ajax({
		url: '/battle/deckcards/' + deck_id + '/',
		success: function(data){
			if(!data.cards.length){
				$("#card_holder").html('There is no card in your deck');
				$("#deck_offense").html('0');
				$("#deck_cost").html('0');
				return false;
			}
			$("#deck_offense").html(data.atk);
			$("#deck_cost").html(data.cost);
			$("#card_holder").html('');
			for(var x = 0; x < data.cards.length; x++){
				card = data.cards[x];
				$("#card_holder").append('<img class="card_img" src="'+ MEDIA_URL +'img/card/50/'+card.equip_id+'_' + card.type_id + '.png" width="50" height="50"/>');
			}
		}
	});
}

battle.prototype.attachEventButtons = function(){
	var _battle = this;
	
	$("#steal_btn").click(function(){
		location.href = '/battle/blueprint/';
		return false;
	});
	$("#revenge_btn").click(function(){
		location.href = '/battle/revenge/';
		return false;
	});
	$("#regular_btn").click(function(){
		location.href = '/battle/';
		return false;
	});
	
	$("#refesh_btn").click(function(){
		_battle.refreshEnemies();
		return false;
	});
	
	$(".wrap_team_name").click(function(){
		var uid = this.id.split('_').pop();
		_battle.showFight(uid);
		return false;
	});
}

battle.prototype.fight = function(){
	/*
	 * 
     * @param deck_id: attack deck used to battle
     * @param target_uid: uid of target user
     * @param card_id: card_id in card piece dropped at duty
     * @param level: the level in card piece dropped at duty
     * @param equip_id: the piece id in card piece dropped at duty  
	 */
	var info = $("#battle_fighting_content").attr('class').split('_');
	var data = {}
	data.target_uid = info[1];
	data.deck_id = this.deck_id;
	if(info.length > 2){
		data.card_id  = info[2];
		data.level    = info[3];
		data.equip_id = info[4];
	}
	nativeCall.doFight(data);
}

battle.prototype.showFight = function(uid){
	if(this.page == 'regular' || this.page == 'revenge')
		location.href = '/battle/fight/' + uid + '/?ref=' + this.page;
	else{
		var info = $("#battle_content").attr('class').split('_');
		location.href = '/battle/fight/' + uid + '/' + info[1] + '/' + info[2] + '/' + info[3] + '/?ref=' + this.page;
	}
		
}

battle.prototype.refreshEnemies = function(){
	if(this.loading)
		return false;
	this.loading = true;
	location.reload();
}


if(typeof wwar == 'undefined')
	wwar = {};
wwar.battle = new battle();