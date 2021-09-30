
class Test {
    
    constructor(num, str) {
    console.log(this.num = num);
    console.log(this.str = str);
}
}

const testing = new Test(7, 'stop');

console.log(testing);

const tricky = new Test(15, 'perfect');

console.log(tricky);

console.log(`${testing.num} ${tricky.str}`);

const numstr = []
numstr[0] = testing.num;
numstr[1] = tricky.str;
console.log(numstr)


function array(stuff) {
        const arr = [];
    for (let i = 0; i < stuff.length; i++) {
        arr.push(stuff[i]);
        console.log(arr)
}
return arr;
}

console.log(array(numstr))
