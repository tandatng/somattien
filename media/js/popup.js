var popup	= {}

popup.not_enough_wcoin = function(refer_url){
	var popup_id = '.not_enough_wcoin'
	//$(popup_id).show();
	var allStatPopup =  $(popup_id).overlay({
		close : ".no_popup",
		mask : {
			color:"#011221",
			opacity:0.8
		},
	});
	allStatPopup.overlay().load();
	$(popup_id+' .no_popup').click(function(){
		$(popup_id).hide()
	})

}
popup.not_enough_gil = function(refer_url){
	var popup_id = '.not_enough_gil'
	//$(popup_id).show();
	var allStatPopup =  $(popup_id).overlay({
		close : ".no_popup",
		mask : {
			color:"#011221",
			opacity:0.8
		},
	});
	allStatPopup.overlay().load();
	$(popup_id+' .no_popup').click(function(){
		$(popup_id).hide()
	})
	
}

popup.not_enough_cheerpoint = function(refer_url){
	var popup_id = '.not_enough_cheerpoint'
	//$(popup_id).show();
	var allStatPopup =  $(popup_id).overlay({
		close : ".no_popup",
		mask : {
			color:"#011221",
			opacity:0.8
		},
	});
	allStatPopup.overlay().load();
	$(popup_id+' .no_popup').click(function(){
		$(popup_id).hide()
	})
	
}

popup.full_deck = function(refer_url){
	var popup_id = '.popup_full_deck'
	//$(popup_id).show();
	var allStatPopup =  $(popup_id).overlay({
		close : ".no_popup",
		mask : {
			color:"#011221",
			opacity:0.8
		},
	});
	allStatPopup.overlay().load();	
	$(popup_id+' .no_popup').click(function(){
		$(popup_id).hide()
	})
}

popup.no_card_master = function(){
	alert('Your card dont exists')
}

popup.exception_error = function(error, refer_url){
	// catch all exception and alert
	// @error: type of error message
	// @refer_url: after click ok, the page will go to refer_url
	switch(error){
	case 'MasterDataDoesNotExist':
		alert('Master data doesn\'t exist');
		break;
	case 'FriendRequestExistsException':
		alert('Friend request already exists');
		break;
	case 'FriendRequestReceiverMaxFriendException':
		alert('Your friend has maximum number of friend request')
		break;
	case 'FriendRequestSenderMaxFriendException':
		alert('You have maximum number of friend request')
		break;
	case 'GameCoinNotEnoughException':
		popup.not_enough_wcoin(refer_url)
		break;
	case 'UserDataDoesNotExistsException':
		alert('User data is invalid')
		break;
	case 'CardPieceTrapItemDoesNotExistException':
		alert('Card piece trap item does not exist');
		break;
	case 'CardPieceTrapNumberIsMaxException':
		alert('Number trap is maximum');
		break;
	case 'CardPieceTrapNumberIsOverItemsException':
		alert('Card piece trap number is over items');
		break;
	case 'DutyStaminaIsNotEnoughException':
		alert('Stamina dont enough');
		break;
	case 'DutyStageRowDoesNotExistException':
		alert('Duty stage data doesnt exist');
		break;	
	case 'DutyStageLevelRowDoesNotExistException':
		alert('Duty stagle level doesnt exist');
		break;	
	case 'DutyBossBattleAttackMemberIsFullException':
		alert('Attack member is full');
		break;	
	case 'DutyBossBattleWinLoseIsNotDecidedYetException':
		alert('DutyBossBattleWinLoseIsNotDecidedYetException');
		break;	
	case 'UserinfoStatusDoesNotExistException':
		alert('UserinfoStatusDoesNotExistException');
		break;	
	case 'CardNumberIsMaxException':
		popup.full_deck(refer_url)
		break;	
	case 'MainCardException':
		alert('MainCardException');
		break;	
	case 'HelpBattleException':
		alert('HelpBattleException');
		break;	
	case 'CardPieceNumberIsMaxException':
		alert('CardPieceNumberIsMaxException');
		break;	
	case 'NotEnoughCoinException':
		popup.not_enough_wcoin(refer_url)
		break;	
	case 'NotEnoughCheerPointException':
		popup.not_enough_cheerpoint(refer_url)
		break;	
	case 'NotEnoughGilException':
		popup.not_enough_gil(refer_url)
		break;	
	case 'MixCardNumberIsInvalidException':
		alert('MixCardNumberIsInvalidException');
		break;	
	case 'MixTypeIsInvalidException':
		alert('MixTypeIsInvalidException');
		break;	
	case 'DeckCardNumIsMaxException':
		alert('DeckCardNumIsMaxException');
		break;	
	case 'DeckOffenseStaminaIsOverException':
		alert('Your current attack cost is not enough for this monster.');
		break;	
	case 'DeckDefenseStaminaIsOverException':
		alert('Your current defense cost is not enough for this monster.');
		break;	
	case 'DeckCardExistedException':
		alert('This card is already added in to deck');
		break;	
	case 'BattleTargetDefenseStaminaIsLowException':
		alert('BattleTargetDefenseStaminaIsLowException');
		break;	
	case 'BattleTargetDefenseStaminaIsEmptyException':
		alert('BattleTargetDefenseStaminaIsEmptyException');
		break;	
	case 'BattleUserOffenseStaminaIsLowException':
		alert('BattleUserOffenseStaminaIsLowException');
		break;	
	case 'BattleUserOffenseStaminaIsEmptyException':
		alert('BattleUserOffenseStaminaIsEmptyException');
		break;	
	case 'BattleNumberOfTimesIsOverException':
		alert('BattleNumberOfTimesIsOverException');
		break;	
	case 'BattleListCardPieceIsCompException':
		alert('BattleListCardPieceIsCompException');
		break;	
	case 'BattleTargetDeckDoesNotExistException':
		alert('BattleTargetDeckDoesNotExistException');
		break;	
	case 'BattleTargetDeckDoesNotHaveCardException':
		alert('BattleTargetDeckDoesNotHaveCardException');
		break;	
	case 'BattleUserDeckDoesNotHaveCardException':
		alert('BattleUserDeckDoesNotHaveCardException');
		break;	
	case 'BattleDeckDoesNotHaveCardException':
		alert('BattleDeckDoesNotHaveCardException');
		break;	
	case 'SkillKindDoesNotExistException':
		alert('SkillKindDoesNotExistException');
		break;	
	case 'LeaderboardBoardNotExist':
		alert('LeaderboardBoardNotExist');
		break;	
	case 'RequestedStaminaIsOverThanGivenStaminaException':
		alert('RequestedStaminaIsOverThanGivenStaminaException');
		break;	
	case 'UserCardListInvalidException':
		alert('UserCardListInvalidException');
		break;	
	case 'SelfTradingException':
		alert('SelfTradingException');
		break;	
	case 'NoTradeSlotAvailableException':
		alert('NoTradeSlotAvailableException');
		break;	
	case 'TradeInvalidException':
		alert('TradeInvalidException');
		break;	
	case 'TradeExpiredException':
		alert('TradeExpiredException');
		break;	
	case 'TradeCardInvalidException':
		alert('TradeCardInvalidException');
		break;	
	case 'TradeNotRepliedException':
		alert('TradeNotRepliedException');
		break;	
	case 'ShareInfoMissingException':
		alert('ShareInfoMissingException');
		break;	
	case 'SendToSelfException':
		alert('SendToSelfException');
		break;	
	case 'NotManagerException':
		alert('NotManagerException');
		break;	
	case 'TeamNotExistException':
		alert('TeamNotExistException');
		break;	
	case 'AlreadyInTeamException':
		alert('AlreadyInTeamException');
		break;	
	case 'BatchArgumentsNotEnoughException':
		alert('BatchArgumentsNotEnoughException');
		break;	
	case 'BatchDatabaseConnectionNotFoundException':
		alert('BatchDatabaseConnectionNotFoundException');
		break;	
	case 'NotInfoOwnerException':
		alert('NotInfoOwnerException');
		break;	
	case 'ConditionNotSatisfyException':
		alert('ConditionNotSatisfyException');
		break;	
	case 'DataNotExistException':
		alert('DataNotExistException');
		break;	
	case 'InviterGameIdNotFoundException':
		alert('InviterGameIdNotFoundException');
		break;	
	case 'FriendGameIdAlreadyAddedException':
		alert('FriendGameIdAlreadyAddedException');
		break;	
	case 'FriendGameIdSelfAddedException':
		alert('FriendGameIdSelfAddedException');
		break;	
	case 'MasterDataInvalidException':
		alert('MasterDataInvalidException');
		break;	
	case 'PasswordLengthInvalidException':
		alert('PasswordLengthInvalidException');
		break;	
	case 'NickAndPasswordIsDuplicatedException':
		alert('NickAndPasswordIsDuplicatedException');
		break;	
	case 'DeviceChangeTypeIsInvalidException':
		alert('DeviceChangeTypeIsInvalidException');
		break;	
	case 'DeviceChangeDataDoesNotExistException':
		alert('DeviceChangeDataDoesNotExistException');
		break;	
	case 'DeviceChangeUuidIsInvalidExistException':
		alert('DeviceChangeUuidIsInvalidExistException');
		break;	
	case 'DeviceChangeLoadAccountIsInvalidExistException':
		alert('DeviceChangeLoadAccountIsInvalidExistException');
		break;	
	case 'InvalidItemException':
		alert('InvalidItemException');
		break;	
	case 'StaminaIsFullException':
		alert('StaminaIsFullException');
		break;	
	case 'OffenseDefenseStaminaIsFullException':
		alert('OffenseDefenseStaminaIsFullException');
		break;	
	case 'ItemIsGiftException':
		alert('ItemIsGiftException');
		break;	
	case 'InvalidStealBlueprintBattleException':
		alert('InvalidStealBlueprintBattleException');
		break;	
	case 'TeamInvestGilNumberIsOverException':
		alert('TeamInvestGilNumberIsOverException');
		break;	
	case 'TeamOwnerRemoveException':
		alert('TeamOwnerRemoveException');
		break;	
	case 'NoActiveLimitedShopException':
		alert('NoActiveLimitedShopException');
		break;	
	case 'BaseCardDoesNotExistException':
		alert('BaseCardDoesNotExistException');
		break;
	// not from exception
	case 'BaseCardIsMaxLevel':
		alert('Your base card has reached max level, you cannot fuse anymore!');
		return false;
	}
	return false;
}
