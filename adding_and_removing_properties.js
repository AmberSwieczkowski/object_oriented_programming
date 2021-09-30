function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(10);

//adding properties
// three ways to do the same thing - add location property to circle
circle.location = {x: 1}; //1st way
circle['location'] = {x: 1}; //2nd way

 const propertyName = 'location'; //3rd way
 circle[propertyName] = {x:1}; //3rd way continued

//deleting properties
//two ways to do the same thing - delete location property from circle
delete circle.location;
delete circle['location'];

console.log(circle);