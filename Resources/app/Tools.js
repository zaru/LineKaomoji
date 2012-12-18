exports.dpToPixel = function(dp) {
	return ( parseInt(dp) * (Titanium.Platform.displayCaps.dpi / 160));
};
exports.pixelToDp = function(px) {
	return ( parseInt(px) / (Titanium.Platform.displayCaps.dpi / 160))+'dp';
};
