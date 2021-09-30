/* Primatives are copied by the value.
    Note: Primatives include numbers, strings, boolean, symbol, undefinded, null */

let a = 10; // a = 10
let b = a; // b = a = 10

a = 20 // a = 20 but b = 10

/* Objects are copied by their reference.
    Note: Objects include functions and arrays */

let x = {value: 10}; // x.value = 10
console.log(x)

let y = x; // y = x.value = 10
console.log(y)

x.value = 20; // x.value = 20 and y = x.value = 20
console.log(x,y);


let number = 10

 function increase(number) {
     number++;
 }

 increase(number);
 console.log(number);