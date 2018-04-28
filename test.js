var Jimp = require('jimp');
var brailleify = require('./brailleify');
Jimp.read('./joy.png')
	.then(image => brailleify(image.bitmap, {threshold: 122, scale: 2}))
	.then(text => require('fs').writeFileSync('./braille.txt', text))
	.catch(console.error);