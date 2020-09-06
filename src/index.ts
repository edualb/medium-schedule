import { Schedule } from "./decorators/schedule";

class MyClass {

  constructor() {}

  @Schedule(500)
  myFunction() {
    console.log('Hello, World!');
  }

}

const myClass = new MyClass();
myClass.myFunction();
console.log("After Call my Schedule function")