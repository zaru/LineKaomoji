(function(){
	Ti.App.sizeNum = 1;
	if (Ti.Platform.displayCaps.density == 'high') {
		Ti.App.sizeNum = 1.5;
	} else if (Ti.Platform.displayCaps.density == 'xhigh') {
		Ti.App.sizeNum = 2;
	}
	
	var Mods = require('/ModulePaths');
	var TabGroup = require(Mods.TABGROUP);
	var tabGroup = new TabGroup();
	tabGroup.open();
	
	alert(Ti.Platform.displayCaps.density + Ti.Platform.displayCaps.dpi);
})();
