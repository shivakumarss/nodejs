var fs = require('fs')
var http = require('http')

var server = http.createServer(function(req,res) {

    console.log('request url' + req.url)
    var myobject = {
        firstName : 'shiva',
        company : 'gl',
        country : 'india'
    };


    res.writeHead(200,{ 'Content-Type' :'application/json' })
    res.end(JSON.stringify(myobject))

});

server.listen(8080,'127.0.0.1')