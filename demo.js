const path = require('path');
var express = require("express");

var host = "127.0.0.1";
var port = 8080;

var app = express();
app.use(express.static(__dirname + "/dist"));

app.get("/", function(request, response){
    const options = {
        root: path.join(__dirname + "/dist")
    };

    response.sendFile('demo.html', options);
});

var server = app.listen(port, host, function() {
    console.log(`Server start at ${server.address().address}:${server.address().port}`);
});