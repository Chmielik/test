# Description

This widget can be used to display bar on top or bottom of page. You can customize displayed text, add custom events, set position of bar.

# Usage

Currently widget is not on npm, so you need to:

1. Clone/download this repository
2. Include the css/test.min.css and js/test.min.js files to the page where you want to use it
3. Example
```javascript
var myBar = new MWPjs({
	message: 'msg here - Beautiful and simple website widgets',
	close: function(){ alert('pushed x') },
	clickOk: function(){ alert('pushed ok') },
	position: 'top'
});
```