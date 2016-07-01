var express = require('express');
var app = express();
var port = 5000;

app.get('/', function(req, res){
    res.status(200).send('Hello world with Node.js and Docker');
})

app.get('/test', function(req, res){
    res.status(200).send('Testing another endpoint');
})

var server = app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});

exports.stop = function(){
    server.close();
}