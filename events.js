var events =require('events')

var util = require('util')

var Person = function(name) {
    this.name = name
}

util.inherits(Person,events.EventEmitter)

var james = new Person('james'); 
var shiva = new Person('shiva');
var java = new Person('java');

var peoples = [james,shiva,java]

peoples.forEach(people => {
    people.on('speak',function(m){
        console.log('hello '+people.name)
    })
});

james.emit('speak','Hello i am james')
shiva.emit('speak','Hello i am shiva')
java.emit('speak','Hello i am java')



// var myEmittor = new events.EventEmitter()
// myEmittor.on('anyEvent',function(mess) {

//     console.log('My Event Message '+mess)
// })

// myEmittor.emit('anyEvent','Hello')
