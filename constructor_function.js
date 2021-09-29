/* Constructor Function
is good if an object has behavior, aka one or more methods, aka functions
Note: constructor functions: 
        -start with a capital letter
        -use the "this" keyword
        -use the "new" operator
        -do not need a return statement */
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(1);
console.log(circle);