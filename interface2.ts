interface User {
    name: string;
    id: number;
  }

  class UserAc {
    name: string;
    id: number;
   
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }
   
  const user2: User = new UserAc("Murphy", 1);
  console.log(user2);