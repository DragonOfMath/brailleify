# brailleify
Turn images into braille text.

# Installation
```bat
npm install brailleify --save
```

# Usage
```js
function brailleify(image, options = {})
```
* `image` is a browser canvas context object, or a Jimp image bitmap.
* `options` is an object with the following options:
  * `align: Boolean` uses a non-space braille character to keep the image aligned vertically. Default is `true`.
  * `invert: Boolean` switches the mapping of braille characters so darker regions are mapped to fewer dots, and vice versa. Default is `false`.
  * `threshold: Integer` affects the overall "shade" of the braille, ranging from 0-255. Default is `120`.
  * `scale: Integer` determines the scale of the image pixels to the braille dots. 1 means 1 pixel per dot, 2 means 4 pixels per dot, and so on. Default is `4`.

# Example
```js
var Jimp = require('jimp');
var brailleify = require('brailleify');
Jimp.read('./joy.png')
	.then(image => brailleify(image.bitmap, {threshold: 122, scale: 2}))
	.then(console.log);
```

```
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠏⠃⠁⢀⢀⢀⢀⢀⢀⢀⢀⢀⠃⠋⠯⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠟⠇⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠃⠯⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠟⠁⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠂⠯⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠇⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠂⢿⣿⣿⣿
⣿⣿⡿⠁⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢯⣿⣿
⣿⣿⠅⢀⢀⢀⢀⢀⣠⣰⡰⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢰⣰⣐⡀⢀⢀⢀⢀⠂⣿⣿
⣿⡟⢀⢀⢀⢀⣠⡿⠇⠁⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠋⢿⣴⢀⢀⢀⢀⣪⣿
⣿⡕⢀⢀⢀⣪⠗⢀⣠⣸⣼⣼⣼⣼⣰⡀⢀⢀⢀⢀⢀⣠⣸⣼⣼⣼⣼⣰⡀⠋⢵⢀⢀⢀⠃⣿
⣿⡕⢀⢀⢀⢀⢀⠊⠇⠃⠃⢀⠂⠃⠃⠇⢀⢀⢀⢀⠂⠇⠃⠃⢀⠂⠃⠋⠏⢀⢀⢀⢀⢀⢀⣿
⣿⣕⣕⡀⢀⢀⢀⡼⠴⣰⣐⣀⣀⡀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣀⣀⣠⣰⠸⣼⢀⢀⢀⢀⢀⢯⣿
⡿⡯⠇⢀⢀⢀⢀⢭⢀⢀⢀⠃⠃⠃⠃⠏⠏⠏⠏⠏⠏⠃⠃⠃⠃⢀⢀⢀⡞⢀⢀⢀⢀⠉⢾⢿
⠃⢀⢀⢀⢀⢀⡀⠂⢽⣼⣰⣰⣀⣀⣀⣀⢀⢀⢀⢀⣀⣀⣀⣠⣰⣰⣼⡞⢀⢀⢀⢀⢀⢀⢀⠃
⣐⢀⢀⢀⢀⢀⢀⢀⢀⠋⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠇⢀⢀⢀⢀⢀⢀⢀⢀⢠
⣿⣽⣰⣰⣸⣘⢐⢀⢀⢀⢀⠋⠯⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠇⢀⢀⢀⢀⣠⢤⣴⣰⣰⣼⣿
⣿⣿⣿⣿⣿⣿⣽⣙⡰⡀⢀⢀⢀⢀⢀⠃⠃⠃⠃⠃⠃⢀⢀⢀⢀⢀⢀⡠⣦⣽⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣙⣤⠰⣀⡀⢀⢀⢀⢀⢀⢀⢀⣀⡠⢘⣤⣹⣾⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣼⣷⣳⣳⣳⣳⣳⣽⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
```