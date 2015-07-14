var fs = require('fs');

var charReplacements = {
  'Ã©': 'é',
  'Ã§': 'ç',
  'Ã¨': 'è',
  'Ã¹': 'ù',
  'Ã‰': 'É',
  'Ã®': 'î',
  'Ã': 'à'

}

var data = fs.readFileSync('pl_sample.json', {encoding: 'utf-8'});
Object.keys(charReplacements).forEach(function(key) {
  var value = charReplacements[key];
  data = data.replace(new RegExp(key, 'g'), value);
});
var parsedData = JSON.parse(data);
console.log(parsedData);
