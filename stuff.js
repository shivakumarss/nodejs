


var counter = function(arr) {
    return 'there are ' + arr.length + ' Elements  in this array';
}

var adder = function(a,b) {
    return `the sum of 2 numbers is ${a+b} `
}

var pi = 3.142

// module.exports.counter = counter;
// module.exports.addrrr = adder;
// module.exports.pival = pi;

module.exports = {
    counter : counter,
    adder: adder,
    pi : pi


};