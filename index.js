var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    response.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
});
