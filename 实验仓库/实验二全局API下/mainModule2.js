const circleModule = require("./circleModule2.js");
var r = process.argv[2];
circleModule.circumference(r);
circleModule.area(r);
console.log("圆的面积:" +circleModule.circle.circumference);
console.log("圆的周长:" + circleModule.circle.area); 