/* Constructor Function
use when an object has "behavior", aka one or more methods, aka a function
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


/* Object Literal of Constructor Function
    shows that a function is an object. */

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    `);

const circle1 = new Circle1(1);
console.log(circle1);