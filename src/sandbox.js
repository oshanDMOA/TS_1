// let greet = () => {
//     console.log("Hello, World");
// }
var greet;
greet = function () {
    console.log("Hello, World");
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
var minus = function (a, b) {
    return a + b;
};
var results = minus(3, 5);
