var http = require('http')
var fs = require('fs')


// var myReadStream =  fs.createReadStream('streaming.txt','utf8')
// myReadStream.on('data',function(chunk){


//     console.log(chunk)

// });


var myReadStream =  fs.createReadStream('streaming.txt','utf8')
var myWriteStream = fs.createWriteStream('writestream.txt','utf8')
myReadStream.on('data',function(chunk){

    myWriteStream.write(chunk)
    console.log(chunk)

});





