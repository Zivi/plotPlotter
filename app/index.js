'use strict';
var express = require('express');
var app = express();
var fs = require('fs');

var file = fs.readFileSync('../pl_parsed.json', {encoding: 'utf-8'});

var plotData = JSON.parse(file);

var monumetsLatLong = plotData.monuments.map(function (monument) {
   return { lat: +monument.node_osm.latitude, lng: +monument.node_osm.longitude, name: monument.nom};
});

app.use(express.static('scripts'));
app.use(express.static('styles'));

app.get('/', function(req, res) {
  res.render('index.jade', {
    monuments: monumetsLatLong
  });

});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
