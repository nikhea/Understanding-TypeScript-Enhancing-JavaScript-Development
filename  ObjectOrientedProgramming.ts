// Defining an interface
interface Shape {
  calculateArea(): number;
}

// Implementing the interface with a class
class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}
