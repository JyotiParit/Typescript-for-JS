//const user = {
  //   name: "Hayes",
  //   id: 0
  // };
 //  console.log(user);
   
 interface User {
    name: string;
    //name:"Chinu",
    //id:8
    id: number;
  };
   
  const User1: User= {
    name: "Chinu",
    id: 8
    //Type '{ username: string; id: number; }' is not assignable to type 'User'.
  //  Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  };
  console.log(User1);
