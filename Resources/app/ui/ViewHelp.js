var Tools = require('/app/Tools');

module.exports = function(win){
	//ポップアップ風に出すために一旦0に
	var t = Ti.UI.create2DMatrix();
	t = t.scale(0);
	
	var helpView = Ti.UI.createView({
		width:'100%',
		height:'100%',
		transform:t,
	});
	var helpWrap = Ti.UI.createView({
		backgroundColor:'#000',
		opacity:0.7,
		width:'100%',
		height:'100%',
	});
	var helpImage = Ti.UI.createImageView({
		width:Tools.pixelToDp(253),
		height:Tools.pixelToDp(340),
		image:'/images/help/help.png',
	});
	var btHelpClose = Ti.UI.createButton({
		title:'close'
	});
	btHelpClose.addEventListener('click', function(){
		win.remove(helpView);
	});
	helpView.add(helpWrap);
	helpView.add(helpImage);
	helpView.add(btHelpClose);
	win.add(helpView);
	
	//ポップアップ風アニメーション
	var t1 = Ti.UI.create2DMatrix();
	t1 = t1.scale(1.0);
	var animation = Titanium.UI.createAnimation();
	animation.transform = t1;
	animation.duration = 200;
	helpView.animate(animation);
};
