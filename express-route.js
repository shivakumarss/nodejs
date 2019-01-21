var express = require('express')

var app = express()


app.listen(8080,'127.0.0.1',function(){


});

app.set('view engine','ejs')

app.use('/assets', express.static('assets'));


app.get('/',function(req,res){

    console.log('this is hello method  ssss')
    res.send('This is home page. ok greate !.')

});


app.get('/contact',function(req,res){

    console.log('this is contact page .. request query '+req.query);
    res.render('contact',{ qs:req.query})

});


app.get('/profile/:id/:name',function(req,res){

    console.log('you have requested '+req.params.id + ' name '+req.params.name);
    res.send('you have requested '+req.params.id + ' name is '+req.params.name);

});


app.get('/href',function(req,res){

    console.log('This is for res.sendFile example ')
    res.sendFile(__dirname + '/href-css.html')
});




app.get('/profiles/:id',function(req,res){

    // render example
    var data = {age : 29,job :'consultant',hobbies :['playing','sleeping','eating'] }    

    res.render('profile',{Person : req.params.id, data : data})

});




