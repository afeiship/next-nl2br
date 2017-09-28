var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-nl2br');

describe('next/nl2br', function () {

  it(" nl2br(null) ", function () {
    var res = nx.nl2br(null);
    var exp1 = '';
    assert.equal(res, exp1);
  });


  it(" nx.nl2br('Kevin\nvan\nZonneveld') ", function () {
    var res = nx.nl2br('Kevin\nvan\nZonneveld');
    var exp1 = 'Kevin<br />\nvan<br />\nZonneveld';
    assert.equal(res, exp1);
  });

  it(' nl2br("\nOne\nTwo\n\nThree\n", false) ', function () {
    var res = nx.nl2br("\nOne\nTwo\n\nThree\n", false);
    var exp1 = '<br>\nOne<br>\nTwo<br>\n<br>\nThree<br>\n';
    assert.equal(res, exp1);
  });


  it(' nl2br("\nOne\nTwo\n\nThree\n", true) ', function () {
    var res = nx.nl2br("\nOne\nTwo\n\nThree\n", true);
    var exp1 = '<br />\nOne<br />\nTwo<br />\n<br />\nThree<br />\n';
    assert.equal(res, exp1);
  });

});
