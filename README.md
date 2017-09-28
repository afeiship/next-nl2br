# next-nl2br
> Replace \n with &lt;br /&gt; in JavaScript.


## resources:
+ http://locutus.io/php/nl2br/


## usage:
```js
//   example 1: nl2br('Kevin\nvan\nZonneveld')
//   returns 1: 'Kevin<br />\nvan<br />\nZonneveld'
//   example 2: nl2br("\nOne\nTwo\n\nThree\n", false)
//   returns 2: '<br>\nOne<br>\nTwo<br>\n<br>\nThree<br>\n'
//   example 3: nl2br("\nOne\nTwo\n\nThree\n", true)
//   returns 3: '<br />\nOne<br />\nTwo<br />\n<br />\nThree<br />\n'
//   example 4: nl2br(null)
//   returns 4: ''
```
