var express = require('express')
var app = express();
var toDoController = require('./controllers/todocontroller')


// set up template engine
app.set('view engine','ejs')
// static files
//app.use('/assets',express.static('./public'))
app.use(express.static('./public'))


// file controllers.
toDoController(app)




app.listen(8080)

console.log('you are listening to 8080')
