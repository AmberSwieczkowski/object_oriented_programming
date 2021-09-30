function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(10);

for (let key in circle) {
    console.log(key);
}

let o = { x: 1, y: 2, z: 3 };
let a = [], i = 0;
for(a[i++] in o);
console.log(a); // prints ['x', 'y', 'z']

for (let i in a) console.log(i); // prints iterated values of 0, 1, 2

for (let i in a);
console.log(i); // prints 3