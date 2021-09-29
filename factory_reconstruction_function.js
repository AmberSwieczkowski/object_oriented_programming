/* Factory Reconstuctor Function
is good if an object has behavior, aka one or more methods */
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
console.log(circle);