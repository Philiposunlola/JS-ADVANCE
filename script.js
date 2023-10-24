//When you have a class, you can use the class to create objects:

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);
  
  document.getElementById("demo").innerHTML = myCar1.name + " " + myCar2.name;


  //How to define and use a Class method.
  class Cat {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  const myCat = new Cat("Eva", 2005);
  document.getElementById("demo1").innerHTML =
  "My cat is " + myCat.age() + " years old.";

  // Pass a parameter into the "age()" method.
  class myDog {
    constructor(name, year) {
      this.name = name;
      this.name = year;
    }
    age(x) {
      return x - this.year;
    }
  }

  const myDog = new Date();
  let year = date.getFullYear();

  const myDog = new Dog("Bingo", 2010);
  document.getElementById("demo2").innerHTML=
  ""
