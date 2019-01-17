var fs = require('fs')
var http = require('http')

var server = http.createServer(function(req,res) {

    console.log('request url2 ' + req.url)

    var myReadStream =  fs.createReadStream('index.html','utf8')
    myReadStream.pipe(res)
    res.writeHead(200,{ 'Content-Type' :'text/html' })

});

server.listen(8080,'127.0.0.1')