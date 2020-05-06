// The Pseudo-classical Pattern and the OLOO Pattern

// Object Linking to Other Object

// Object Creation Considerations

// Before we get into the two object creation patterns, let's use an example to see the typical considerations we face when we need to create similar objects. For example, we may have the object `point` to represent a point in the coordinate plane, who also knows how to calculate its distance to the origin and whether its on the X or the Y axis:

var pointA = {
  x: 30,
  y: 40,

  onXAxis: function() {
    return this.y === 0;
  },

  onYAxis: function() {
    return this.x === 0;
  },

  distanceToOrigin: function() {;
    return Math.sqrt((this.x * this.x) + (this.y * this.y))
  },
};

pointA.distanceToOrigin();    // 50
pointA.onXAxis();             // false
pointA.onYAxis();             // false

// Use of the object literal form is great if all we need is one object. When we need to have many points in our program, we'd like our points to:
//  - Be able to have their own states, represented by the x and y values;
// - Share the `distanceToOrigin`, `OnXAxis` and `onYAxis` behaviors, because they work the same way for all points on the coordinate plane.

// The Pseudo-classical Pattern

// The Pseudo-classical pattern is a combination of the constructor pattern and the prototype pattern. With this pattern, we use a constructor to set object state, and put shared methods on the constructor function's prototype:

var Point = function(x, y) {                // capitalized constructor name as a convention
  this.x = x || 0;                          // initialize states with arguments
  this.y = y || 0;                          // 0 as default value
};

Point.prototype.onXAxis = function() {      // shared behaviors added to constructor's prototype property
  return this.y === 0;
};

Point.prototype.onYAzis = function() {      // these methods are added one by one
  return this.x === 0;
};

Point.prototype.distanceToOrigin = function() {
  return Math.sqrt((this.x ** 2) + (this.y ** 2));
};

var pointA = new Point(30, 40);             // use new to create objects
var pointB = new Point(20);

pointA instanceof Point;                    // use instanceof to check type
pointB instanceof Point;

pointA.distanceToOrigin();                  // 50
pointB.onXAxis();                           // true

/////////


// The OLOO Pattern
// OLOO which stands for "Object LInking to Other OBjects," was first popularized by Kyle Simpson. JavaScript sheds its pretense as a "class oriented" language, where it uses constructor functions as fake classes. Instead, it embraces its prototype based object mode. With the OLOO pattern, we define the shared behaviors on a prototype objec,t then use `Onject.create` to create objects that delegate directly from that object, without going through the roundabout way that invovles "constructors and their prototype properties."

var Point = {                         // capitalized name for the prototype as a convention
  x: 0,                               // default value defined on the prototype
  y: 0,

  onXAxis: function() {               // shared methods dfined on the prototype
    return this.y === 0;
  },

  onYAxis: function() {
    return this.x === 0;
  },

  distanceToOrigin: function() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },

  init: function(x, y) {              // optional init method to set states
    this.x = x;
    this.y = y;
    return this;
  },
};

var pointA = Object.create(Point).init(30, 40);
var pointB = Object.create(Point);

Point.isPrototypeOf(pointA);          // use ifPrototypeOf to check type
Point.isPrototypeOf(pointB);

pointA.distanceToOrigin();            // 50
pointB.onXazis();                     // true






















