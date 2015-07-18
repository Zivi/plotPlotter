var fs = require('fs');

var charReplacements = {
  'Ã©': 'é',
  'Ã§': 'ç',
  'Ã¨': 'è',
  'Ã¹': 'ù',
  'Ã‰': 'É',
  'Ã®': 'î',
  'Ã': 'à',
  'à¯': 'ï',
  'à¼': 'ü',
  'à«': 'ë',
  'àª': 'ê',
  'Å“': 'œ'
}

var data = fs.readFileSync('pl_raw_data.json', {encoding: 'utf-8'});
Object.keys(charReplacements).forEach(function(key) {
  var value = charReplacements[key];
  data = data.replace(new RegExp(key, 'g'), value);
});

fs.writeFileSync('pl_parsed.json', data);
