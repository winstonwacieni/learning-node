let http = require('http');
http.createServer(function (req, res){
    res.write('hello from server'); // response to client
    res.end();
}).listen(6000);