var Tools = require('/app/Tools');
var Mods = require('ModulePaths');

module.exports = {
	//通常のWindow
	windowNormal:{
		barColor:'#2a3d5d',
		barImage:'/images/common/bg_header.png',
		backgroundImage:'/images/common/bg.png',
	},
	//履歴ボタン
	btHistory:{
		backgroundImage:'/images/common/bt_history.png',
		width:Tools.pixelToDp(43),
		height:Tools.pixelToDp(31),
	},
	//ヘルプボタン
	btHelp:{
		backgroundImage:'/images/common/bt_help.png',
		width:Tools.pixelToDp(39),
		height:Tools.pixelToDp(31),
	}
};
