(function(){
	//モジュール読み込み設定
	var Mods = require('/ModulePaths');
	
	//タブグループ
	var TabGroup = require(Mods.TABGROUP);
	var tabGroup = new TabGroup();
	tabGroup.open();
})();
