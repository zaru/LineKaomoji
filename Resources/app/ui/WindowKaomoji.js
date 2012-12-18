var Tools = require('/app/Tools');

module.exports = function(){
	
	var win = Ti.UI.createWindow({
		backgroundColor:'#fff',
		backgroundImage:'/images/common/bg.png',
		title:L('win_kaomoji')
	});
	
	var inputData = [];
	
	for(var i=0;i<30;i++){
		if(i%5 == 0){
			var row = Ti.UI.createTableViewRow({
				backgroundImage:'/images/common/bg_section.png',
				color:'#ff0000',
				height:'25dp',
				title:'row' + i,
			});
		}else{
			var row = Ti.UI.createTableViewRow({
				height:Tools.pixelToDp(44),
			});
			
			var bt1 = Ti.UI.createButton({
				backgroundImage:'/images/common/bg_bt.png',
				title:'顔文字です',
				width:Tools.pixelToDp(148),
				height:Tools.pixelToDp(38),
				left:Tools.pixelToDp(8),
				top:Tools.pixelToDp(3),
			});
			var bt2 = Ti.UI.createButton({
				backgroundImage:'/images/common/bg_bt.png',
				title:'顔文字です',
				width:Tools.pixelToDp(148),
				height:Tools.pixelToDp(38),
				right:Tools.pixelToDp(8),
				top:Tools.pixelToDp(3),
			});
			
			row.add(bt1);
			row.add(bt2);
		}
		
		inputData.push(row);
	}
	
	var tableView = Titanium.UI.createTableView({
		separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
		separatorColor:'transparent',
	});
	
	if (Ti.Platform.osname !== 'mobileweb') {
		tableView.style = Titanium.UI.iPhone.TableViewStyle.GROUPED;
	}
	tableView.data = inputData;
	
	win.add(tableView);
	
	return win;
	
}
