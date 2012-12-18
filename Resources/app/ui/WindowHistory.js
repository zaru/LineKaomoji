var Tools = require('/app/Tools');

module.exports = function(){
	var btClose = Ti.UI.createButton({
		backgroundImage:'/images/common/bt_help.png',
		width:Tools.pixelToDp(39),
		height:Tools.pixelToDp(31),
	});
	var win = Ti.UI.createWindow({
		barColor:'#2a3d5d',
		barImage:'/images/common/bg_header.png',
		backgroundImage:'/images/common/bg.png',
		title:L('win_history'),
		rightNavButton:btClose,
		modal:true,
	});
	
	btClose.addEventListener('click', function(){
		win.close();
	});
	
	return win;
};