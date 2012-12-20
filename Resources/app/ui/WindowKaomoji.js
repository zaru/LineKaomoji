var Tools = require('/app/Tools');
var Mods = require('/ModulePaths');
var WindowHistory = require(Mods.WINDOWHISTORY);
var WindowList = require(Mods.WINDOWLIST);
var ViewHelp = require(Mods.VIEWHELP);
var Styles = require(Mods.STYLES);

module.exports = function(){
	var btHistory = Ti.UI.createButton(Styles.btHistory);
	var btHelp = Ti.UI.createButton(Styles.btHelp);
	var win = Ti.UI.createWindow(Styles.windowNormal);
	win.title = L('win_kaomoji');
	win.leftNavButton = btHistory;
	win.rightNavButton = btHelp;
	
	/*
	 * Android用メニュー
	 */
	if (Titanium.Platform.osname === 'android') {
		win.activity.onCreateOptionsMenu = function(e) {
			var menu = e.menu;
			var menuHelp = menu.add({ title: L('menu_help') });
			menuHelp.addEventListener('click', function(){
				var viewHelp = new ViewHelp(win);
			});
		};
	}
	
	/*
	 * 履歴ウインドウ
	 */
	btHistory.addEventListener('click', function(){
		var winHistory = new WindowHistory();
		winHistory.open();
	});
	
	/*
	 * ヘルプウインドウ
	 */
	btHelp.addEventListener('click', function(){
		var viewHelp = new ViewHelp(win);
	});
	
	
	var inputData = [];
	
	/*
	 * 顔文字カテゴリのJSON読み込み
	 */
	var file = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory + '/db/Category.json');
	var json = file.read().toString();
	if (json && json.length > 0) {
		var jsonCategory = JSON.parse(json);
		for(var i=0;i<jsonCategory.length;i++){
			var category = jsonCategory[i];
			
			var row = Ti.UI.createTableViewRow(Styles.rowSection);
			
			var title = Ti.UI.createLabel(Styles.rowSectionTitle);
			title.text = category.Title;
			
			var label = Ti.UI.createLabel(Styles.rowSectionText);
			label.text = category.Message;
			
			var icon = Ti.UI.createImageView(Styles.rowSectionIcon);
			icon.image = '/images/icon/' + category.Id + '.png';
			
			row.add(title);
			row.add(label);
			row.add(icon);
			
			inputData.push(row);
		}
	}
	
	/*
	for(var i=0;i<30;i++){
		if(i % 5 == 0){
			var row = Ti.UI.createTableViewRow(Styles.rowSection);
			
			var title = Ti.UI.createLabel(Styles.rowSectionTitle);
			title.text = 'ベーシック系';
			
			var label = Ti.UI.createLabel(Styles.rowSectionText);
			label.text = '普段使いにぴったり';
			
			var icon = Ti.UI.createImageView(Styles.rowSectionIcon);
			icon.image = '/images/icon/icon_1.png';
			
			row.add(title);
			row.add(label);
			row.add(icon);
		}else{
			var row = Ti.UI.createTableViewRow({
				height:Tools.pixelToDp(44),
			});
			
			var bt1 = Ti.UI.createButton(Styles.rowListLeft);
			bt1.title = '顔文字です';
			
			var bt2 = Ti.UI.createButton(Styles.rowListRight);
			bt2.title = '顔文字です';
			
			bt1.addEventListener('click', function(){
				var winList = new WindowList();
				win.containingTab.open(winList,{animated:true});
			});
			bt2.addEventListener('click', function(){
				var winList = new WindowList();
				win.containingTab.open(winList,{animated:true});
			});
			
			row.add(bt1);
			row.add(bt2);
		}
		
		inputData.push(row);
	}
	*/
	
	var tableView = Titanium.UI.createTableView({
		backgroundColor:'transparent',
		separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
		separatorColor:'transparent',
		bottom:Tools.pixelToDp(50),
	});
	tableView.data = inputData;
	
	win.add(tableView);
	
	var adView = Ti.UI.createWebView({
		width:Tools.pixelToDp(320),
		height:Tools.pixelToDp(50),
		bottom:0,
		scrollsToTop:false,
		url:'/ad/ad.html',
	});
	win.add(adView);
	
	return win;
	
}
