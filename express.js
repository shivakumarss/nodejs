var express = require('express')

var app = express()

app.listen(8080,'127.0.0.1',function(){


});

app.get('/',function(req,res){

    console.log('this is hello method')
    res.send('This is home page.')

});


app.get('/contact',function(req,res){

    console.log('this is contact page')
    res.send('This is contact page.')

});