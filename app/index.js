var express = require('express');
var app = express();
var fs = require('fs');

var file = fs.readFileSync('../pl_parsed.json', {encoding: 'utf-8'});

var plotData = JSON.parse(file);

app.use(express.static('scripts'));
app.use(express.static('styles'));

app.get('/', function(req, res){
  res.render('index.jade', plotData);
});

app.get('/markers', function(req, res){
  res.send(plotData);
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
