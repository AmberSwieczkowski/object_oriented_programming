
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1); //the call method: the value in {} is what "this" will point to in the function and the second argument will be applied as the function parameter (radius)
Circle.apply({}, [1]); //the apply method is used when your function parameter (radius) is an array


const another = new Circle(1);
console.log(another);

const test = function tester(num) {
    console.log(this.num = num);
}

const testing = new test(1);

console.log(testing);