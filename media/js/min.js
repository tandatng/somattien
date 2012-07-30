
/* show on off status of button--------------------------------------------*/
$('.button_off').bind('click',function(){
	$('.button_off').removeClass('transit')
	$(this).toggleClass('transit');
});

$('#btn_fb_on').bind('click',function(){
	$('#btn_fb_off').toggleClass('transit')
	$(this).removeClass('transit');
});
$('#btn_fb_off').bind('click',function(){
	$('#btn_fb_on').toggleClass('transit')
	$(this).removeClass('transit');
});


$('#btn_tw_on').bind('click',function(){
	$('#btn_tw_off').toggleClass('transit')
	$(this).removeClass('transit');
});
$('#btn_tw_off').bind('click',function(){
	$('#btn_tw_on').toggleClass('transit')
	$(this).removeClass('transit');
});




$('.button_soft').bind('click',function(){
	$(this).toggleClass('transit');
});

$('.button_off_1').bind('click',function(){
	$('.button_off').removeClass('transit')
	$(this).toggleClass('transit');
});
$('.button_8').bind('click',function(){
	$(this).toggleClass('transit');
});
$('.tab_btn').bind('click',function(){
	$(this).toggleClass('transit');
});
$('.check_icon').bind('click',function(){
	$('.active_icon1').toggleClass('blind');
});
$('.button_go').bind('click',function(){
	$(this).toggleClass('transit');
});
$('.select_card').bind('click',function(){
	$('.select_card').removeClass('transit')
	$(this).toggleClass('transit');
});

/* drop 
 * 
 * 
//down search box **/ 



//$('.sort_box').bind('click',function(){
//	$('.sort_type_space').toggleClass('blind');
//});
//$(".drop_down_box li").each(function(){
//	$(this).bind('mouseover',function(){
//		$(this).toggleClass('_select');
//	});
//	$(this).bind('mouseout',function(){
//		$(this).toggleClass('_select');
//		//$('.sort_type_space').toggleClass('blind');
//	});
//	$(this).click(function(){
//		var rel = $(this).attr('rel');
//		//alert(rel);
//		//$(this).parent().find('li').removeClass
//		//$(this).parent().find('li').addClass('_select')
//		//$(this).removeClass('_select');
//		//alert($(this).html());
//		$('.sort_type_text').html($(this).html())
//		
//		$('.sort_type_space').toggleClass('blind');
//	})
//});
//
///* drop down search box for team invest page**/ 
//
//
//
//$('#sort_fusion').bind('click',function(){
//	$('#treasure_fusion').toggleClass('blind');
//});
//$(".drop_down_fusion li").each(function(){
//	$(this).bind('mouseover',function(){
//		$(this).toggleClass('_select');
//	});
//	$(this).bind('mouseout',function(){
//		$(this).toggleClass('_select');
//		//$('.sort_type_space').toggleClass('blind');
//	});
//	$(this).click(function(){
//		var rel = $(this).attr('rel');
//		//alert(rel);
//		//$(this).parent().find('li').removeClass
//		//$(this).parent().find('li').addClass('_select')
//		//$(this).removeClass('_select');
//		//alert($(this).html());
//		$('#treasure_text_fusion').html($(this).html())
//		
//		$('#treasure_fusion').toggleClass('blind');
//	})
//});
//
//
//
//
//$('#sort_lesson').bind('click',function(){
//	$('#treasure_lesson').toggleClass('blind');
//});
//$(".drop_down_lesson li").each(function(){
//	$(this).bind('mouseover',function(){
//		$(this).toggleClass('_select');
//	});
//	$(this).bind('mouseout',function(){
//		$(this).toggleClass('_select');
//		//$('.sort_type_space').toggleClass('blind');
//	});
//	$(this).click(function(){
//		var rel = $(this).attr('rel');
//		//alert(rel);
//		//$(this).parent().find('li').removeClass
//		//$(this).parent().find('li').addClass('_select')
//		//$(this).removeClass('_select');
//		//alert($(this).html());
//		$('#treasure_text_lesson').html($(this).html())
//		
//		$('#treasure_lesson').toggleClass('blind');
//	})
//});
//
//
//
//
//$('#change_macth').bind('click',function(){
//	$('#treasure_macth').toggleClass('blind');
//});
//$(".drop_down_macth li").each(function(){
//	$(this).bind('mouseover',function(){
//		$(this).toggleClass('_select');
//	});
//	$(this).bind('mouseout',function(){
//		$(this).toggleClass('_select');
//		//$('.sort_type_space').toggleClass('blind');
//	});
//	$(this).click(function(){
//		var rel = $(this).attr('rel');
//		//alert(rel);
//		//$(this).parent().find('li').removeClass
//		//$(this).parent().find('li').addClass('_select')
//		//$(this).removeClass('_select');
//		//alert($(this).html());
//		$('#treasure_text_macth').html($(this).html())
//		
//		$('#treasure_macth').toggleClass('blind');
//	})
//});
//
//
//
//
//
//$('#sort_deck').bind('click',function(){
//	$('#treasure_deck').toggleClass('blind');
//});
//$(".drop_down_deck li").each(function(){
//	$(this).bind('mouseover',function(){
//		$(this).toggleClass('_select');
//	});
//	$(this).bind('mouseout',function(){
//		$(this).toggleClass('_select');
//		//$('.sort_type_space').toggleClass('blind');
//	});
//	$(this).click(function(){
//		var rel = $(this).attr('rel');
//		//alert(rel);
//		//$(this).parent().find('li').removeClass
//		//$(this).parent().find('li').addClass('_select')
//		//$(this).removeClass('_select');
//		//alert($(this).html());
//		$('#treasure_text_deck').html($(this).html())
//		
//		$('#treasure_deck').toggleClass('blind');
//	})
//});
//
//
//
//
//$('#sort_unit').bind('click',function(){
//	$('#treasure_unit').toggleClass('blind');
//});
//$(".drop_down_unit li").each(function(){
//	$(this).bind('mouseover',function(){
//		$(this).toggleClass('_select');
//	});
//	$(this).bind('mouseout',function(){
//		$(this).toggleClass('_select');
//		//$('.sort_type_space').toggleClass('blind');
//	});
//	$(this).click(function(){
//		var rel = $(this).attr('rel');
//		//alert(rel);
//		//$(this).parent().find('li').removeClass
//		//$(this).parent().find('li').addClass('_select')
//		//$(this).removeClass('_select');
//		//alert($(this).html());
//		$('#treasure_text_unit').html($(this).html())
//		
//		$('#treasure_unit').toggleClass('blind');
//	})
//});
//
//
//
//
//
//
//$('#invest_gil').bind('click',function(){
//	$('#gil_team').toggleClass('blind');
//});
//$(".drop_down_gil li").each(function(){
//	$(this).bind('mouseover',function(){
//		$(this).toggleClass('_select');
//	});
//	$(this).bind('mouseout',function(){
//		$(this).toggleClass('_select');
//		//$('.sort_type_space').toggleClass('blind');
//	});
//	$(this).click(function(){
//		var rel = $(this).attr('rel');
//		//alert(rel);
//		//$(this).parent().find('li').removeClass
//		//$(this).parent().find('li').addClass('_select')
//		//$(this).removeClass('_select');
//		//alert($(this).html());
//		$('#gil_text_team').html($(this).html())
//		
//		$('#gil_team').toggleClass('blind');
//	})
//});
//
//
//
//
//$('#invest_ts').bind('click',function(){
//	$('#treasure_team').toggleClass('blind');
//});
//$(".drop_down_treasure li").each(function(){
//	$(this).bind('mouseover',function(){
//		$(this).toggleClass('_select');
//	});
//	$(this).bind('mouseout',function(){
//		$(this).toggleClass('_select');
//		//$('.sort_type_space').toggleClass('blind');
//	});
//	$(this).click(function(){
//		var rel = $(this).attr('rel');
//		//alert(rel);
//		//$(this).parent().find('li').removeClass
//		//$(this).parent().find('li').addClass('_select')
//		//$(this).removeClass('_select');
//		//alert($(this).html());
//		$('#treasure_text_team').html($(this).html())
//		
//		$('#treasure_team').toggleClass('blind');
//	})
//});
//
//
//
//
//
//
///* drop down search box for team invest page**/ 
//$('.sort_type_btn1').bind('click',function(){
//	$('.sort_type_space1').toggleClass('blind');
//});
//$(".drop_down_box1 li").each(function(){
//	$(this).bind('mouseover',function(){
//		$(this).toggleClass('_select');
//	});
//	$(this).bind('mouseout',function(){
//		$(this).toggleClass('_select');
//		//$('.sort_type_space').toggleClass('blind');
//	});
//	$(this).click(function(){
//		var rel = $(this).attr('rel');
//		//alert(rel);
//		//$(this).parent().find('li').removeClass
//		//$(this).parent().find('li').addClass('_select')
//		//$(this).removeClass('_select');
//		//alert($(this).html());
//		$('.sort_type_text1').html($(this).html())
//		
//		$('.sort_type_space1').toggleClass('blind');
//	})
//});


/* menu links*/

/*----macth-------------------------------------------------------*/
$('.regular_match_btn').bind('click',function(){
	window.location.href="macth_regular.html";
});
$('.revenge_match_btn').bind('click',function(){
	window.location.href="macth_revenge.html";
});

$('.steal_match_btn').bind('click',function(){
	window.location.href="macth_steal.html";
});


/* activity page links-------------------------------------------------*/
$('#regular_activity').bind('click',function(){
	window.location.href="activity_regular.html";
});
$('#limited_activity').bind('click',function(){
	window.location.href="activity_limited.html";
});
$('#history_activity').bind('click',function(){
	window.location.href="activity_history.html";
});

/* top page links-------------------------------------------------*/
$('#lesson_btn').bind('click',function(){
	window.location.href="lesson/lesson.html";
});
$('#match_btn').bind('click',function(){
	window.location.href="match/macth.html";
});
$('#fusion_btn').bind('click',function(){
	window.location.href="fusion/fusion_top.html";
});
$('#summon_btn').bind('click',function(){
	window.location.href="summon/summon.html";
});
$('#activity_btn').bind('click',function(){
	window.location.href="activity/activity_regular.html";
});
$('.summon_result').bind('click',function(){
	window.location.href="summon_result.html";
});
$('#card_list_btn').bind('click',function(){
	window.location.href="../library.html";
});
$('#summon_sm_btn').bind('click',function(){
	window.location.href="summon.html";
});





$('#mail_more_btn').bind('click',function(){
	window.location.href="info/information_mail.html";
});
$('#team_more_btn').bind('click',function(){
	window.location.href="info/information_team.html";
});
$('#school_more_btn').bind('click',function(){
	window.location.href="info/information_school.html";
});
$('.cheer_point').bind('click',function(){
	window.location.href="summon/summon.html";
});

/* invite----------------------------------------------------------*/
$('#tw_invite_btn').bind('click',function(){
	window.location.href="invite_tw.html";
});
$('#mail_invite_btn').bind('click',function(){
	window.location.href="invite_mail.html";
});

$('#friend_invite_btn').bind('click',function(){
	window.location.href="invite_game_id.html";
});
$('#fb_invite_btn').bind('click',function(){
	window.location.href="invite_fb.html";
});

$('#how_invite_btn').bind('click',function(){
	window.location.href="invite_how.html";
});
/* team----------------------------------------------------------*/
$('#join_team_btn').bind('click',function(){
	window.location.href="team_star_sure.html";
});
$('#sure_team_btn').bind('click',function(){
	window.location.href="team_star_sent.html";
});
$('#later_team_btn').bind('click',function(){
	window.location.href="team_star.html";
});

$('#cheer_team_btn').bind('click',function(){
	window.location.href="team_cheer_all.html";
});
$('.send_team_cheer_btn').bind('click',function(){
	window.location.href="team_cheer_detail.html";
});

$('.summon_cheer_btn').bind('click',function(){
	window.location.href="summon/summon.html";
});



$('#team_invest_btn').bind('click',function(){
	window.location.href="team_invest.html";
});

$('#invest_team_btn').bind('click',function(){
	window.location.href="invite/invite_fb.html";
});
$('#more_team_board').bind('click',function(){
	window.location.href="team_board.html";
});
$('#more_team_info').bind('click',function(){
	window.location.href="team_info.html";
});
$('#ranking_team_btn').bind('click',function(){
	window.location.href="team_star.html";
});
$('#team_team_btn').bind('click',function(){
	window.location.href="team.html";
});

$('#recruit_team_btn').bind('click',function(){
	window.location.href="../recruit/team_recruit.html";
});

$('#member_team_btn').bind('click',function(){
	window.location.href="team_member.html";
});
$('.not_member_btn').bind('click',function(){
	window.location.href="team.html";
});

$('.accept_member_btn').bind('click',function(){
	window.location.href="team_member_accept.html";
});
$('.mem_star').bind('click',function(){
	window.location.href="team_star_join.html";
});

/* information page links----------------------------------------------------------*/
$('.mail_info_bonus').bind('click',function(){
	window.location.href="../stats_bonus.html";
});
$('.gift_info').bind('click',function(){
	window.location.href="../gift/gift.html";
});
$('.cheer_mes_info').bind('click',function(){
	window.location.href="information_cheer.html";
});



/* team page links*/


/* item page links-----------------------------------*/
$('#item_use_tab').bind('click',function(){
	window.location.href="item.html";
});
$('#item_gift_tab').bind('click',function(){
	window.location.href="item_send.html";
});


$('.buy_item_btn').bind('click',function(){
	window.location.href="item_alert.html";
});
$('.use_item_btn').bind('click',function(){
	window.location.href="item_alert.html";
});
$('#no_alert_btn').bind('click',function(){
	window.location.href="item.html";
});
$('#item_send_btn').bind('click',function(){
	window.location.href="item_send_alert.html";
});
$('.send_item_btn').bind('click',function(){
	window.location.href="item_send_confirm.html";
});

/* blueprint page links-------------------------------------------------*/
$('.rewards_blueprint_btn').bind('click',function(){
	window.location.href="blueprint_detail.html";
});
$('.blp_back_btn').bind('click',function(){
	window.location.href="blueprint.html";
});
$('.blp_back_1_btn').bind('click',function(){
	window.location.href="blueprint_detail.html";
});
$('.blp_back_2_btn').bind('click',function(){
	window.location.href="blueprint_st_p.html";
});
$('.blp_back_3_btn').bind('click',function(){
	window.location.href="blueprint_st_w.html";
});
$('.pic_ts_blueprint').bind('click',function(){
	window.location.href="blueprint_st_p1.html";
});
$('.pic_ts_dis').bind('click',function(){
	window.location.href="blueprint_st_w1.html";
});
$('#st_btn').bind('click',function(){
	window.location.href="blueprint_st_p.html";
});
$('.st_1_btn').bind('click',function(){
	window.location.href="blueprint_st_p2.html";
});
$('.st_2_btn').bind('click',function(){
	window.location.href="blueprint_st_w2.html";
});
$('#st_2_btn').bind('click',function(){
	window.location.href="blueprint_st_w.html";
});
$('.cancel_st').bind('click',function(){
	window.location.href="blueprint_st_p1.html";
});
$('.cancel_1_st').bind('click',function(){
	window.location.href="blueprint_st_w1.html";
});
$('.cancel_2_st').bind('click',function(){
	window.location.href="blueprint_st_buy.html";
});
$('.pic_ts_buy_dis').bind('click',function(){
	window.location.href="blueprint_st_w_buy.html";
});

$('#st_buy_btn').bind('click',function(){
	window.location.href="blueprint_st_buy_1.html";
});
$('.buy_blp_trap').bind('click',function(){
	window.location.href="blueprint_st_buy_2.html";
});
$('#later_blp_btn').bind('click',function(){
	window.location.href="blueprint_st_buy_1.html";
});


/* friend page links----------------------------------------------------------*/
$('.not_now_request').bind('click',function(){
	window.location.href="friend_approve_deny.html";
});

$('.accept_request_btn').bind('click',function(){
	window.location.href="friend_approve_accept.html";
});
$('#fellows_friend_btn').bind('click',function(){
	window.location.href="friend_fellows.html";
});
$('#team_friend_btn').bind('click',function(){
	window.location.href="friend_team.html";
});
$('#request_friend_btn').bind('click',function(){
	window.location.href="friend_request.html";
});
$('#search_friend_btn').bind('click',function(){
	window.location.href="friend_search.html";
});

$('.deny_friend_btn').bind('click',function(){
	window.location.href="friend_approve_deny.html";
});
$('.accept_friend_btn').bind('click',function(){
	window.location.href="friend_approve_accept.html";
});
$('.cancel_friend_btn').bind('click',function(){
	window.location.href="friend_request.html";
});


/* gift page links-----------------------------------------------*/
$('#gift_fellows_btn').bind('click',function(){
	window.location.href="gift_fellows.html";
});
$('#gift_Pre_btn').bind('click',function(){
	window.location.href="gift.html";
});
$('.gift_more_btn').bind('click',function(){
	window.location.href="gift_all.html";
});
$('.get_item_btn').bind('click',function(){
	window.location.href="gift_friend.html";
});

/* shop page links-----------------------------------------------------------*/
$('#supply_btn').bind('click',function(){
	window.location.href="shop.html";
});
$('#buy_shop_btn').bind('click',function(){
	window.location.href="shop_buy.html";
});
$('#limited_btn').bind('click',function(){
	window.location.href="shop_limited.html";
});
$('.buy_item_btn').bind('click',function(){
	window.location.href="shop_buy_alert.html";
});
$('.use_item_btn').bind('click',function(){
	window.location.href="shop_supplies_alert.html";
});
$('#no_shop_btn').bind('click',function(){
	window.location.href="shop.html";
});
$('#no_shop_btn').bind('click',function(){
	window.location.href="shop.html";
});
$('#shop_useTab').bind('click',function(){
	window.location.href="shop.html";
});
$('#shop_giftTab').bind('click',function(){
	window.location.href="shop_send.html";
});
$('#no_shop_send_btn').bind('click',function(){
	window.location.href="shop_send.html";
});
$('.use_send_btn').bind('click',function(){
	window.location.href="shop_send_alert.html";
});


/* unit---------------------------------*/
$('#make_unit_btn').bind('click',function(){
	window.location.href="deck.html";
});
$('#tranfer_unit_btn').bind('click',function(){
	window.location.href="team.html";
});
$('#monster_unit_btn').bind('click',function(){
	window.location.href="unit.html";
});
$('#fusion_unit_btn').bind('click',function(){
	window.location.href="fusion/fusion_use_top.html";
});



/* mypage page links---------------------------------*/
$('#title_top_btn').bind('click',function(){
	window.location.href="unit.html";
});
$('#title_mypage_btn').bind('click',function(){
	window.location.href="../team/team.html";
});
$('#connect_btn').bind('click',function(){
	window.location.href="invite/invite_fb.html";
});
$('#back_delete_mypage').bind('click',function(){
	window.location.href="my_page_detail.html";
});
$('#back_mypage_detail').bind('click',function(){
	window.location.href="my_page.html";
});





$('#monter_btn').bind('click',function(){
	window.location.href="../unit.html";
});
$('#treasure_btn').bind('click',function(){
	window.location.href="../blueprint/blueprint.html";
});
$('#friend_btn').bind('click',function(){
	window.location.href="../friend/friend_fellows.html";
});


$('.cancel_mypage_btn').bind('click',function(){
	window.location.href="my_page.html";
});
$('.input_box_mypage').bind('click',function(){
	window.location.href="my_page_edit_voice.html";
});
$('.back_mypage_btn').bind('click',function(){
	window.location.href="my_page.html";
});
$('.remove_mypage_btn').bind('click',function(){
	window.location.href="my_page_delete_message.html";
});
$('.chat_more_btn').bind('click',function(){
	window.location.href="my_page_chatlog.html";
});

$('.not_now_btn').bind('click',function(){
	window.location.href="another_player.html";
});
$('#request_ano_btn').bind('click',function(){
	window.location.href="another_player_friend_request.html";
});
$('.player_chat_box').bind('click',function(){
	window.location.href="my_page_detail.html";
});

/*---trade-------------------------------------------------*/
$('.create_trade').bind('click',function(){
	window.location.href="trade_you_create.html";
});
$('#partner_offer_btn').bind('click',function(){
	window.location.href="trade_partner_offer.html";
});
$('.trade_trade').bind('click',function(){
	window.location.href="trade_you_card.html";
});
$('#trade_top_btn').bind('click',function(){
	window.location.href="trade_you_top.html";
});
$('#your_offer_btn').bind('click',function(){
	window.location.href="trade_you_top.html";
});
$('#history_offer_btn').bind('click',function(){
	window.location.href="trade_history.html";
});










/*---another-------------------------------------------------*/
$('#title_ano_btn').bind('click',function(){
	window.location.href="../unit.html";
});
$('#trade_ano_btn').bind('click',function(){
	window.location.href="../trade/trade_you_top.html";
});
$('#macth_ano_btn').bind('click',function(){
	window.location.href="../match/macth_steal.html";
});
$('.match_btn').bind('click',function(){
	window.location.href="../macth.html";
});
$('#more_ano_btn').bind('click',function(){
	window.location.href="another_player_chatlog.html";
});
$('#gift_ano_btn').bind('click',function(){
	window.location.href="../gift/gift.html";
});
$('#invite_ano_btn').bind('click',function(){
	window.location.href="../invite/invite_fb.html";
});

$('#hello_ano_btn').bind('click',function(){
	window.location.href="another_player_cheer.html";
});
$('.cancel_cheer_btn').bind('click',function(){
	window.location.href="another_player.html";
});
$('.send_cheer_btn').bind('click',function(){
	window.location.href="another_player_cheer_confirm.html";
});
$('.not_ch_comfirm_btn').bind('click',function(){
	window.location.href="another_player_cheer.html";
});




$('.title_name_ano').bind('click',function(){
	window.location.href="team.html";
});

$('.cancel_ano_btn').bind('click',function(){
	window.location.href="another_player.html";
});

$('.post_btn').bind('click',function(){
	window.location.href="another_player_detail.html";
});

$('.chat_box').bind('click',function(){
	window.location.href="another_player_edit_voice.html";
});
$('.chat_back_btn').bind('click',function(){
	window.location.href="another_player.html";
});
$('.cancel_chat_btn').bind('click',function(){
	window.location.href="another_player.html";
});
$('.send_cheer_btn').bind('click',function(){
	window.location.href="another_player_cheer_confirm.html";
});
$('.cancel_cheer_cof_btn').bind('click',function(){
	window.location.href="another_player_cheer.html";
});

/* card feck-------------------------------------------------*/
$('.attack_deck_btn').bind('click',function(){
	window.location.href="deck.html";
});
$('.defense_deck_btn').bind('click',function(){
	window.location.href="deck_defense.html";
});
$('#edit_deck_btn').bind('click',function(){
	window.location.href="deck_detail.html";
});
$('.change_summon_btn').bind('click',function(){
	window.location.href="deck_detail_add.html";
});
$('.cancel_deck_btn').bind('click',function(){
	window.location.href="deck.html";
});

/* lesson page links -----------------------------------------------*/
$('#next_lesson').bind('click',function(){
	window.location.href="lesson.html";
});
$('#go_lesson_btn').bind('click',function(){
	window.location.href="lesson_stage.html";
});
$('#lv2_lesson_btn').bind('click',function(){
	window.location.href="lesson_stage_1.html";
});
$('#lv1_lesson_btn').bind('click',function(){
	window.location.href="lesson_stage.html";
});
$('#go_stage_btn').bind('click',function(){
	window.location.href="lesson_complete.html";
});
$('#go_compl_btn').bind('click',function(){
	window.location.href="lesson_animation.html";
});
$('#go_anm').bind('click',function(){
	window.location.href="lesson_animation_1.html";
});
$('#go_anm_1').bind('click',function(){
	window.location.href="lesson_animation_2.html";
});
$('#go_anm_2').bind('click',function(){
	window.location.href="lesson_animation_3.html";
});

$('#go_anm_3').bind('click',function(){
	window.location.href="lesson_animation_4.html";
});
$('#go_anm_4').bind('click',function(){
	window.location.href="lesson_use.html";
});
$('#use_lesson_btn').bind('click',function(){
	window.location.href="lesson_say.html";
});
$('#fight_lesson_btn').bind('click',function(){
	window.location.href="../match/macth.html";
});
$('#go_say_btn').bind('click',function(){
	window.location.href="lesson_boss.html";
});
$('.fight_btn').bind('click',function(){
	window.location.href="lesson_fight.html";
});
$('#main_lesson').bind('click',function(){
	window.location.href="lesson_main_monster.html";
});
$('#add_mem_lesson').bind('click',function(){
	window.location.href="lesson_add_member.html";
});
$('#recorver_lesson_btn').bind('click',function(){
	window.location.href="lesson_popup.html";
});
$('#record_lesson_1').bind('click',function(){
	window.location.href="lesson_bonus.html";
});
$('#steal_lesson_btn').bind('click',function(){
	window.location.href="../match/macth.html";
});





/*recruit-------------------------------------*/
$('#join_team').bind('click',function(){
	window.location.href="recruit_new.html";
});
$('#recruit_member').bind('click',function(){
	window.location.href="recruit_member_new.html";
});
$('#new_recruit_btn').bind('click',function(){
	window.location.href="recruit_member_new.html";
});
$('#recommend_recruit_btn').bind('click',function(){
	window.location.href="recruit_member_recommend.html";
});
$('#condition_recruit_btn').bind('click',function(){
	window.location.href="recruit_member_condition.html";
});
$('#new_recruit_btn_1').bind('click',function(){
	window.location.href="recruit_new.html";
});
$('#recommend_recruit_btn_1').bind('click',function(){
	window.location.href="recruit_recommend.html";
});
$('#condition_recruit_btn_1').bind('click',function(){
	window.location.href="recruit_condition.html";
});
$('#add_info_1').bind('click',function(){
	window.location.href="recruit_add_info.html";
});
$('#add_info').bind('click',function(){
	window.location.href="recruit_menber_add_info.html";
});


/*---leadrboard-------------------------------------------------*/
$('#best_player').bind('click',function(){
	window.location.href="leaderbroad_player.html";
});
$('#best_team').bind('click',function(){
	window.location.href="leaderbroad_team.html";
});

/* connect page links*/


/* library page links*/

/* unit page links*/


/* paging number */
$('.num_btn').bind('click',function(){
	$(this).toggleClass('transit');
});
$('.pre_btn').bind('click',function(){
	$(this).toggleClass('transit');
});

$('.next_btn').bind('click',function(){
	$(this).toggleClass('transit');
});































