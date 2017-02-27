var pug = require('pug');
var pugCompile = pug.compileFile('./app/views/index.pug', {pretty: true});
var plotData = require('./pl_parsed.json');

var monuments = plotData.monuments.map(function (monument) {
   return { lat: +monument.node_osm.latitude, lng: +monument.node_osm.longitude, name: monument.nom};
});

console.log(pugCompile({monuments: monuments}));
