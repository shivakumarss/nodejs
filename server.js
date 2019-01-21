var http = require('http')

var server = http.createServer(function(req,res) {

    
    console.log('request url ' + req.url)

    res.writeHead(200,{ 'Content-Type' :'text/plain' })
    res.end('Hey Node')

});

server.listen(8080,'127.0.0.1')

console.log('server listening to 8080')

