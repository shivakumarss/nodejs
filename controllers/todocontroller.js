var bodyParser = require('body-parser')
var data = [{item : 'Get book'}, {item:'Get pen'},{item : 'Get Phone' }]
var urlBodyParser = bodyParser.urlencoded({extended : false});

module.exports = function(app) {



    app.get('/todo',function(req,res){
        res.render('todocontroller',{todos : data})
    });

    app.post('/todo',urlBodyParser,function(req,res){
        console.log(req.body)
        data.push(req.body)
        res.json(data)
    });

    app.delete('/todo/:item',function(req,res){
        
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, '-') != req.params.item
        })
        res.json(data)
    });

}