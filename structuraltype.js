function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
// logs "12, 26"
//const point = { x: 12, y: 26 };
//logPoint(point);
var point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
//const rect = { x: 33, y: 3, width: 30, height: 80 };
//logPoint(rect); // logs "33, 3"
var color = { hex: "#187ABF" };
console.log(color);
//Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
// Type '{ hex: string; }' is missing the following properties from type 'Point': x, y
