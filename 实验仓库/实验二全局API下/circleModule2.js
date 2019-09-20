var circle = {
    circumference: "circumference",
    area:"area"
}
function circumference(r){
    circle.circumference = 2 * Math.PI * r;
}
function area(r){
    circle.area = Math.PI * r * r;
}
module.exports = {
    circle: circle,
    circumference : circumference,
    area:area
}