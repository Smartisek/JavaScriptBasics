//objects 
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
};
console.log(person.firstName);

class Car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }   
    displayCar(){
        return this.brand + " " + this.model;
    }
}

let myCar = new Car("Lamborghini", "Huracan");
console.log(myCar.displayCar());

class Model extends Car{
    constructor(brand, model, year){
        super(brand, model);
        this.year = year;
    }
    displayModel(){
        return this.displayCar() + " " + this.year;
    }
}

let myModel = new Model("Lamborgini", "Huracan", "2023");

const arr = [1,2,3,4,5];
const squares = arr.map((x) => x*x);
console.log(squares);

//template literals
let nameGir = "Alice";
console.log(`Hello ${nameGirl}!`);

//import (hello) from "../main.js"; in the beggining of script 

// export at the end to be able to import that script 