"use strict";
// let greet = () => {
//     console.log("Hello, World");
// }
let greet;
greet = () => {
    console.log("Hello, World");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
const minus = (a, b) => {
    return a + b;
};
let results = minus(3, 5);
