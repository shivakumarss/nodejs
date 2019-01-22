var bodyParser = require('body-parser')
var mongoose = require('mongoose')
//var data = [{item : 'Get book'}, {item:'Get pen'},{item : 'Get Phone' }]
var urlBodyParser = bodyParser.urlencoded({extended : false});

// Connect the database
mongoose.connect('mongodb://localhost:27017/todo')


// Create 
var TodoSchema = new mongoose.Schema({
    item : String
});

var Todo = mongoose.model('collection-todo',TodoSchema);


// // Add item to database
// var ItemOne = Todo({item: 'first item'}).save(function(err){
//     if(err) throw err

// });




module.exports = function(app) {

    app.get('/todo',function(req,res){
        
        // get from mongodb and send in the ejs
        Todo.find({},function(err,data){
           if(err) throw err   
           res.render('todocontroller',{todos : data})
        });
    });

    app.post('/todo',urlBodyParser,function(req,res){
        // get data from the view and save it in mongodb

        var newTodo = Todo(req.body).save(function(err, data){
            res.json(data)  
        })
       
    });

    app.delete('/todo/:item',function(req,res){
        // get the item fro mthe view and delete from mongodb.
        Todo.find({item : req.params.item.replace(/\-/g," ")}).remove(function(err,data){
            if(err) throw err   
            res.json(data)
        });


        // data = data.filter(function(todo) {
        //     return todo.item.replace(/ /g, '-') != req.params.item
        // })
        // res.json(data)
    });

}