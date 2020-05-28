# next-nl2br
> Replace \n with <br /> in JavaScript.

## installation
```bash
npm install -S @feizheng/next-nl2br
```

## usage
```js
import '@feizheng/next-nl2br';
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
