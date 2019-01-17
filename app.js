var stuff = require('./stuff')
var time = 0;

// setInterval(function(){
//     time += 2
//     console.log(time + " secs have passed .")
// },2000);


// var timer = setInterval(function(){
//     time += 2
//     console.log(time + " secs have passed .")
//     if(time > 5) {
//         clearInterval(timer)
//     }
// },2000);

// console.log(__dirname)
// console.log(__filename)

function sayHi(){
 
    console.log("Hi ")
}

var sayBye = function() {
    console.log("Bye ");
}

function callGeneric(func){
    func();
}



sayHi();
callGeneric(sayBye);

console.log(stuff.counter(['go','ide']))
console.log(stuff.adder(10,22))
console.log(stuff.pi)

console.log(stuff.adder(stuff.pi,22))
