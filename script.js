class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

//The example above creates a class named "Car".</p>
//The class has two initial properties: "name" and "year".</p>

<p>Creating two car objects from a car class:</p>
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);
  
  document.getElementById("demo").innerHTML =
  myCar1.name + " " + myCar2.name;
