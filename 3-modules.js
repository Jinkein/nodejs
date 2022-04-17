
// const sayHi= function (name) {
//        console.log(`Hello there, ${name}`);
// };
const names = require('./4-names');
// console.log(names);
const sayHi = require("./5-greeting");
const items = require("./6-alt-syntax");
// console.log(items);
const multiple = require("./7-mind-grenade");

// sayHi(nhat);
sayHi("Lily");
sayHi(names.nhat);
sayHi(names.name);
// console.log(multiple(4,20));