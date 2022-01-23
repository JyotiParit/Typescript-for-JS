function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];
              
   obj: "Anaya";
    }
    return obj;
  }
  console.log(wrapInArray("Anaya"));