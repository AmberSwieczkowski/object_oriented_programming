/* Primatives are copied by the value.
    Note: Primatives include numbers, strings, boolean, symbol, undefinded, null */
    
    let number = 10 

    function increase(number) {
        number++;
    }
   
    increase(number);
    console.log(number);

/* Objects are copied by their reference.
    Note: Objects include functions and arrays */

    let obj = {value: 10}

    function increase(obj) {
        obj.value++;
    }
   
    increase(obj);
    console.log(obj);