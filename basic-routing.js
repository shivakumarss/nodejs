var fs = require('fs')
var http = require('http')

var server = http.createServer(function(req,res) {

    console.log('request url' + req.url)
  
    if(req.url === '/home' || req.url === '/' ) {
        res.writeHead(200,{ 'Content-Type': 'text/html'})
        fs.createReadStream('index.html').pipe(res)
    } else if(req.url === '/contact') {

        res.writeHead(200,{ 'Content-Type': 'text/html'})
        fs.createReadStream('contact.html').pipe(res)
    }  else if(req.url === '/href') {

        res.writeHead(200,{ 'Content-Type': 'text/html'})
        fs.createReadStream('href-css.html').pipe(res)
        
    }  else if(req.url === '/api/ninjas') {

        var message = {
            name : 'shiva',
            age : '29'
        };


        res.writeHead(200,{ 'Content-Type': 'application/json'})
        res.end(JSON.stringify(message))
        
    } else {
        res.writeHead(404)
        fs.createReadStream('404.html').pipe(res)
    }


});

server.listen(8080,'127.0.0.1')