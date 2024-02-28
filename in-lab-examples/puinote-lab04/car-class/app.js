/* A class representing a car that can start and stop moving. */
class Car {
  model;
  year;
  element;
  isMoving = false;
  /* Declare four properties:
   * model - the model name of the car
   * year - the year of the car
   * isMoving - boolean indicating whether the car is moving (default false)
   * element - the HTML element that this car will update
   */

  constructor(model, year, element) {
    /* Initialize the car's properties here */
    this.model = model;
    this.year = year;
    this.element = element;

    const btnDrive = this.element.querySelector(".btnDrive");
    const btnBrake = this.element.querySelector(".btnBrake");

    btnDrive.onclick = this.drive.bind(this);
    btnBrake.onclick = this.brake.bind(this);
  }

  /**
   * Update the contents of the car's element to show what its current state is.
   * When the car is stopped, its text should be the model and year of the car.
   * When it is moving, the text should add "is driving". Also, add the "moving-car"
   * class to the car element when it is moving.
   */
  updateElement() {
    // implement this
    let nameElement = this.element.querySelector("p");
    nameElement.innerText = this.model + " " + this.year;
    if (this.isMoving) {
      this.element.classList.add("moving-car");
      nameElement.innerText += " is Moving";
    }
    else {
      this.element.classList.remove("moving-car");
    }
  }

  drive() {
    this.isMoving = true;
    this.updateElement();
    // implement this
  }

  brake() {
    this.isMoving = true;
    this.updateElement();
    // implement this
  }
}

/*
 Retrieve the car element from the page, and initialize a new Car object with the
 model "Chevy Corvette", the year "2022", and the car element. Then call
 updateElement().
*/
let carElement = document.querySelector(".car"); // implement
//".car" is class in html
let theCar = new Car("Chevy Corvette", "2022", carElement); // implement
theCar.updateElement(); 
