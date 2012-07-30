function tutorial(){
	
}

tutorial.prototype.init = function(height){
	
	$('#summon_fellows_btn, #get3_btn1, #start_fushin_btn, #tutorial_next_btn_1, #match_btn, #next_stage_btn').click(function(){
		location.href = $(this).attr('rel');
		return false;
	});
	
	$('#skip_box').click(function(){
		location.href = '/tutorial/team_top/1/'
	});
	
	$("#button_match").click(function(){
		nativeCall.doFight({tutorial:1});
	});
	
	$("#btnPopupClose").click(function(){
		$("#popup").addClass('out');
		$("#tutorial_top_main").removeClass('out');
	});
	
	$('#summon_btn').click(function(){
		window.location = '/tutorial/gacha_normal/';
	});

	$('#fusion_btn').click(function(){
		window.location = '/tutorial/fusion_top/';
	});
	
	$("#learn_more").click(function(){
		$("#learn_more_box").removeClass('out');
		$("#tutorial_top_main").addClass('out');
		return false;
	});
	
	$("#close_learn_more").click(function(){
		$("#learn_more_box").addClass('out');
		$("#tutorial_top_main").removeClass('out');
		return false;
	});
}


tutorial.prototype.initTeamPage = function(){
	var _tutorial = this;
	$("#btnNickForm").click(function(){
		var name = $("#input_name_tutorial").val();	
		name = $.trim(name);
		var nick_reg = /^[\x20-\x7e]{4,12}$/;
		if(!nick_reg.test(name)){
			//alert('Nick name must be from 4 to 12 character length,\ncontains only number (0-9) and latin character (a-z).');
			alert('Nick name must be from 4 to 12 character length.');
			return false;
		}
		
		$(".user_nick_name").html(name);
		
		$("#enter_name").addClass('out')
		$("#team_choice").removeClass('out');
	});
	
	$("#btnBackTutorial").click(function(){
		location.href = '/tutorial/top/1'
	});
	
	$("#btnJoinRandomTeam").click(function(){
		$('#team_choice').addClass('out');
		$("#join_random_team_div").removeClass('out');
		
		//_tutorial.teamAction($("#input_name_tutorial").val(), 'join');
	});
	
	$("#btnCreateTeam").click(function(){
		$('#team_choice').addClass('out');
		$("#create_team_div").removeClass('out');
		//_tutorial.teamAction($("#input_name_tutorial").val(), 'create');
	});
	
	$("#btnJoinTeamCancel").click(function(){
		$('#team_choice').removeClass('out');
		$("#join_random_team_div").addClass('out');
	});
	
	
	$("#btnCreateTeamCancel").click(function(){
		$('#team_choice').removeClass('out');
		$("#create_team_div").addClass('out');
	});
	
	$("#btnJoinTeamConfirm").click(function(){
		_tutorial.teamAction($("#input_name_tutorial").val(), 'join');
	})
	
	$("#btnCreateTeamConfirm").click(function(){
		_tutorial.teamAction($("#input_name_tutorial").val(), 'create');
	})
}

tutorial.prototype.teamAction = function(name, behavior){
	$.ajax({
		url:"/tutorial/team_prepare/",
		data : {user_nick:name, action:behavior},
		type : "POST",
		success:function(data){
			if(data == "created"){
				alert("You have established your own team !");
				window.location.href = "/tutorial/final";
			}else if(data == "joined"){
				alert("You have just requested to join a team !");
				window.location.href = "/tutorial/final";
			}else if(data == "invalid"){
				alert("Something wrong with server. Please try again.");
				return;
			}else if(data == "finished"){
				alert("You have already finished tutorial. Now enjoy the game!");
				window.location.href = "/";
			}else if(data == "nick_invalid"){
				alert("Something wrong with your nick name. Please try another.")
				return;
			}
		}
	});
}


if(typeof wwar == 'undefined')
	wwar = {}
wwar.tutorial = new tutorial();
