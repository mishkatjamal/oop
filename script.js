class UserRole{
  constructor(name,role){
    this.name = name;
    this.role = role
  }
  CreateUser(){
    console.log("user created");
    
  }
}

class AdminRole extends UserRole{
  constructor(name,role){
super(name,role)
  }
  RemoveUser(){
    console.log("Remove user");
    
  }
}

let u1 = new UserRole("mishkat","developer");
let a1 = new AdminRole("jamal","football");