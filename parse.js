var fs = require('fs');

fs.readFile('pl_sample.json', {encoding: 'utf-8'}, function(err,data){
    if (!err) {
    console.log('received data: ' + data);
    } else {
        console.log(err);
    }
});
