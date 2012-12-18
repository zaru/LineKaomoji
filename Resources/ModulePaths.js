var firstSeparator = (Ti.Platform.name === 'mobileweb') ? '' : '/';
var ui = firstSeparator + 'app/ui/';

module.exports = {
	TABGROUP: ui + 'TabGroup',
	WINDOWKAOMOJI:  ui + 'WindowKaomoji',
	WINDOWFAVORITE:  ui + 'WindowFavorite',
	WINDOWAPP:  ui + 'WindowApp',
	STYLES: ui + 'Styles'
	
}
