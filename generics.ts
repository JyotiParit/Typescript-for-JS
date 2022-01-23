interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => string;
  }
   
  // This line is a shortcut to tell TypeScript there is a
  // constant called `backpack`, and to not worry about where it came from.
  declare const backpack: Backpack<string>;
   
  // object is a string, because we declared it above as the variable part of Backpack.
  const object = backpack.get();
   
  // Since the backpack variable is a string, you can't pass a number to the add function.
  const object1=backpack.add("Jyoti");
  //Argument of type 'number' is not assignable to parameter of type 'string'.
  console.log(object1);