var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001;


app.get('/', function (req, res) {
    res.send('hello' +
        '' +
        '' +
        ' world')
})


app.listen(port);

console.log('server started on: ' + port);