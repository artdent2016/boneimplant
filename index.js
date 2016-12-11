var express = require('express');
var port = 3000;
var app = express();


app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log(`Server listening at port ${port}`);
