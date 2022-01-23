// object is a string, because we declared it above as the variable part of Backpack.
var object = backpack.get();
// Since the backpack variable is a string, you can't pass a number to the add function.
var object1 = backpack.add("Jyoti");
//Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(object1);
