var Tools = require('/app/Tools');
var Mods = require('/ModulePaths');
var WindowHistory = require(Mods.WINDOWHISTORY);
var Styles = require(Mods.STYLES);

module.exports = function(){
	var btHistory = Ti.UI.createButton(Styles.btHistory);
	var btHelp = Ti.UI.createButton(Styles.btHelp);
	var win = Ti.UI.createWindow(Styles.windowNormal);
	win.title = L('win_kaomoji');
	win.leftNavButton = btHistory;
	win.rightNavButton = btHelp;
	
	btHistory.addEventListener('click', function(){
		var winHistory = new WindowHistory();
		winHistory.open();
	});
	
	var inputData = [];
	
	for(var i=0;i<30;i++){
		if(i%5 == 0){
			var row = Ti.UI.createTableViewRow({
				backgroundImage:'/images/common/bg_section.png',
				color:'#ff0000',
				height:Tools.pixelToDp(25),
			});
			var title = Ti.UI.createLabel({
				text:'ベーシック系',
				color:'#494949',
				font:{fontSize:14},
				left:Tools.pixelToDp(32),
			});
			var label = Ti.UI.createLabel({
				text:'普段使いにぴったり',
				color:'#a9a9a9',
				font:{fontSize:12},
				right:Tools.pixelToDp(8),
			});
			var icon = Ti.UI.createImageView({
				image:'/images/icon/icon_1.png',
				width:Tools.pixelToDp(16),
				height:Tools.pixelToDp(16),
				left:Tools.pixelToDp(8),
			});
			row.add(title);
			row.add(label);
			row.add(icon);
		}else{
			var row = Ti.UI.createTableViewRow({
				height:Tools.pixelToDp(44),
			});
			
			var bt1 = Ti.UI.createButton({
				backgroundImage:'/images/common/bg_bt.png',
				color:'#535353',
				title:'顔文字です',
				width:Tools.pixelToDp(148),
				height:Tools.pixelToDp(38),
				left:Tools.pixelToDp(8),
				top:Tools.pixelToDp(3),
			});
			var bt2 = Ti.UI.createButton({
				backgroundImage:'/images/common/bg_bt.png',
				color:'#535353',
				title:'顔文字です',
				width:Tools.pixelToDp(148),
				height:Tools.pixelToDp(38),
				right:Tools.pixelToDp(8),
				top:Tools.pixelToDp(3),
			});
			bt1.addEventListener('click', function(){
				win.containingTab.open(Ti.UI.createWindow({
				}));
			});
			
			row.add(bt1);
			row.add(bt2);
		}
		
		inputData.push(row);
	}
	
	var tableView = Titanium.UI.createTableView({
		backgroundColor:'transparent',
		separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
		separatorColor:'transparent',
	});
	tableView.data = inputData;
	
	win.add(tableView);
	
	return win;
	
}
