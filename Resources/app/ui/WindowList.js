var Tools = require('/app/Tools');
var Mods = require('/ModulePaths');
var Styles = require(Mods.STYLES);

module.exports = function(){
	var win = Ti.UI.createWindow(Styles.windowNormal);
	win.title = L('win_kaomoji');
	
	var inputData = [];
	
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
	
	for(var i=0;i<100;i++){
		//便宜上、スコープを閉じてRowのオブジェクトを特定できるようにする
		(function(){
			var kaomojiStr = 'ヾ(●ε●)ノ”ぶーぶー';
			
			var row = Ti.UI.createTableViewRow(Styles.rowDetail);
			var rowView = Ti.UI.createView(Styles.rowDetailView);
			var btFavorite = Ti.UI.createImageView(Styles.rowDetailBtFavorite);
			var kaomoji = Ti.UI.createLabel(Styles.rowDetailLabel);
			kaomoji.text = kaomojiStr;
			var kaomojiCopy = Ti.UI.createView(Styles.rowDetailCopy);
			var btOpen = Ti.UI.createImageView(Styles.rowDetailBtOpen);
			
			//クリップボードへ
			kaomojiCopy.addEventListener('click', function(){
				//選択したRow全体の色を変えるアニメーション
				var fadeIn = Ti.UI.createAnimation(Styles.animeTouchBegin);
				var fadeOut = Ti.UI.createAnimation(Styles.animeTouchEnd);
				rowView.animate(fadeIn);
				fadeIn.addEventListener('complete', function(){
					rowView.animate(fadeOut);
				});
				
				Ti.UI.Clipboard.setText(kaomojiStr);
				alert('クリップボードにコピーしました');
			});
			
			//LINEを起動して顔文字を送る
			btOpen.addEventListener('click', function(){
				var encoded = Ti.Network.encodeURIComponent(kaomojiStr);
				Titanium.Platform.openURL('line://msg/text/' + encoded);
			});
			
			row.add(rowView);
			row.add(btFavorite);
			row.add(kaomoji);
			row.add(kaomojiCopy);
			row.add(btOpen);
			inputData.push(row);
		})();
	}
	
	var tableView = Titanium.UI.createTableView(Styles.tableNormal);
	tableView.data = inputData;
	
	win.add(tableView);
	
	return win;
	
}
