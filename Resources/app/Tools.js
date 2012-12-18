exports.dpToPixel = function(dp) {
	return ( parseInt(dp) * (Titanium.Platform.displayCaps.dpi / 160));
};
exports.pixelToDp = function(px) {
	//iPhoneの場合は、そのままのピクセルで
	if ( Titanium.Platform.osname == 'iphone' ) {
		return parseInt(px) +'dp';
	} else {
		return ( parseInt(px) / (Titanium.Platform.displayCaps.dpi / 160))+'dp';
	}
};
