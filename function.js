function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
        obj: "Anaya";
    }
    return obj;
}
console.log(wrapInArray("Anaya"));
