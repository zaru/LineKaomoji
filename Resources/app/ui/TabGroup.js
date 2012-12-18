
var Mods = require('/ModulePaths');

var WindowKaomoji = require(Mods.WINDOWKAOMOJI),
	WindowFavorite = require(Mods.WINDOWFAVORITE),
	WindowApp = require(Mods.WINDOWAPP);

module.exports = function(_args) {
	
	var tabGroup = Ti.UI.createTabGroup({
	});
	
	var win1 = new WindowKaomoji();
	var win2 = new WindowFavorite();
	var win3 = new WindowApp();


	var tab1 = Ti.UI.createTab({
		window: win1,
		icon:'/images/common/menu_kaomoji.png',
		title:L('menu_kaomoji'),
	});
	
	var tab2 = Ti.UI.createTab({
		window:  win2,
		icon:'/images/common/menu_favorite.png',
		title:L('menu_favorite'),
	});
	
	var tab3 = Ti.UI.createTab({
		window:  win3,
		icon:'/images/common/menu_app.png',
		title:L('menu_app'),
	});
	

	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	tabGroup.addTab(tab3);
		
	
	return tabGroup;
};

