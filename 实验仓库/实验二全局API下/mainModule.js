var circleModule = require("./circleModule.js");
var r = process.argv[2];
var circleObj = circleModule.circleFun(r);
console.log("圆的面积:" + circleObj.circumference());
console.log("圆的周长:" + circleObj.area());
