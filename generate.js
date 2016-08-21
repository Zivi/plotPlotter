var jade = require('jade');
var jadeCompile = jade.compileFile('./app/views/index.jade', {pretty: true});
var plotData = require('./pl_parsed.json');

var monuments = plotData.monuments.map(function (monument) {
   return { lat: +monument.node_osm.latitude, lng: +monument.node_osm.longitude, name: monument.nom};
});

console.log(jadeCompile({monuments: monuments}));
