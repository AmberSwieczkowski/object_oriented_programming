/* Object Literal Syntax 
is not good if an object has one or more methods, aka "behavior" */
const circle = {
    /* these are "properties"
        properties are used to hold values */
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    /* draw is a "method" because it an object that contains a function
        methods are used to define some logic */
    draw: function () {
        console.log('draw');
    }
};

circle.draw();
