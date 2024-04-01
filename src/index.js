import nx from '@jswork/next';

const UNDEFINED = 'undefined';
const EMPTY_STR = '';
const XML_BR = '<br ' + '/>';
const HTML_BR = '<br>';
const REPLACER = /(\r\n|\n\r|\r|\n)/g;
const DOLLER_1 = '$1';

nx.nl2br = function (inString, inIsXhtml) {
  //  discuss at: http://locutus.io/php/nl2br/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Philip Peterson
  // improved by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Atli Þór
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Maximusya
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Reynier de la Rosa (http://scriptinside.blogspot.com.es/)
  //    input by: Brett Zamir (http://brett-zamir.me)
  //   example 1: nl2br('Kevin\nvan\nZonneveld')
  //   returns 1: 'Kevin<br />\nvan<br />\nZonneveld'
  //   example 2: nl2br("\nOne\nTwo\n\nThree\n", false)
  //   returns 2: '<br>\nOne<br>\nTwo<br>\n<br>\nThree<br>\n'
  //   example 3: nl2br("\nOne\nTwo\n\nThree\n", true)
  //   returns 3: '<br />\nOne<br />\nTwo<br />\n<br />\nThree<br />\n'
  //   example 4: nl2br(null)
  //   returns 4: ''
  // Some latest browsers when str is null return and unexpected null value
  if (typeof inString === UNDEFINED || inString === null) {
    return EMPTY_STR;
  }
  // Adjust comment to avoid issue on locutus.io display
  const breakTag = inIsXhtml || typeof inIsXhtml === UNDEFINED ? XML_BR : HTML_BR;
  return (inString + EMPTY_STR).replace(REPLACER, breakTag + DOLLER_1);
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.nl2br;
}

export default nx.nl2br;
