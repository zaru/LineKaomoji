var firstSeparator = (Ti.Platform.name === 'mobileweb') ? '' : '/';
var ui = firstSeparator + 'app/ui/';

module.exports = {
	TABGROUP: ui + 'TabGroup',
	WINDOWKAOMOJI:  ui + 'WindowKaomoji',
	WINDOWFAVORITE:  ui + 'WindowFavorite',
	WINDOWAPP:  ui + 'WindowApp',
	WINDOWHISTORY: ui + 'WindowHistory',
	WINDOWLIST: ui + 'WindowList',
	VIEWHELP: ui + 'ViewHelp',
	STYLES: ui + 'Styles'
}
