# next-nl2br
> Replace \n with `<br />` in JavaScript.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-nl2br
```

## usage
```js
import '@jswork/next-nl2br';
//   example 1: nl2br('Kevin\nvan\nZonneveld')
//   returns 1: 'Kevin<br />\nvan<br />\nZonneveld'
//   example 2: nl2br("\nOne\nTwo\n\nThree\n", false)
//   returns 2: '<br>\nOne<br>\nTwo<br>\n<br>\nThree<br>\n'
//   example 3: nl2br("\nOne\nTwo\n\nThree\n", true)
//   returns 3: '<br />\nOne<br />\nTwo<br />\n<br />\nThree<br />\n'
//   example 4: nl2br(null)
//   returns 4: ''
```

## other solution
```js
while (message.indexOf("\\n") !== -1) {
   message = message.replace("\\n", "<br />");
}
```

## resources
- http://locutus.io/php/nl2br/
- https://stackoverflow.com/questions/6331895/how-to-replace-n-with-br-in-javascript

## license
Code released under [the MIT license](https://github.com/afeiship/next-nl2br/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-nl2br
[version-url]: https://npmjs.org/package/@jswork/next-nl2br

[license-image]: https://img.shields.io/npm/l/@jswork/next-nl2br
[license-url]: https://github.com/afeiship/next-nl2br/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-nl2br
[size-url]: https://github.com/afeiship/next-nl2br/blob/master/dist/next-nl2br.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-nl2br
[download-url]: https://www.npmjs.com/package/@jswork/next-nl2br
