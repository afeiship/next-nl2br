(function () {
  require('../src');

  describe('api.basic test', () => {
    test(' nl2br(null) ', function () {
      var res = nx.nl2br(null);
      var exp1 = '';
      expect(res).toBe(exp1);
    });

    test(" nx.nl2br('Kevin\nvan\nZonneveld') ", function () {
      var res = nx.nl2br('Kevin\nvan\nZonneveld');
      var exp1 = 'Kevin<br />\nvan<br />\nZonneveld';
      expect(res).toBe(exp1);
    });

    test(' nl2br("\nOne\nTwo\n\nThree\n", false) ', function () {
      var res = nx.nl2br('\nOne\nTwo\n\nThree\n', false);
      var exp1 = '<br>\nOne<br>\nTwo<br>\n<br>\nThree<br>\n';
      expect(res).toBe(exp1);
    });

    test(' nl2br("\nOne\nTwo\n\nThree\n", true) ', function () {
      var res = nx.nl2br('\nOne\nTwo\n\nThree\n', true);
      var exp1 = '<br />\nOne<br />\nTwo<br />\n<br />\nThree<br />\n';
      expect(res).toBe(exp1);
    });
  });
})();
