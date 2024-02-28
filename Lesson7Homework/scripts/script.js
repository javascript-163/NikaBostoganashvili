class Shape {
  constructor(name) {
    this.name = name;
  }

  area() {
    return "Area calculation is not implemented yet.";
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super();
    this.name = name;
    this.radius = radius;
  }

  area() {
    return `Area of the ${this.name} is ${Math.PI * this.radius ** 2}`;
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super();
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return `Area of the ${this.name} is ${this.width * this.height}`;
  }
}

class Triangle extends Shape {
  constructor(name, base, height) {
    super();
    this.name = name;
    this.base = base;
    this.height = height;
  }

  area() {
    return `Area of the ${this.name} is ${(this.base * this.height) / 2}`;
  }
}

let circle = new Circle("Circle", 5);
let rect = new Rectangle("Rectangle", 6, 7);
let triangle = new Triangle("Triangle", 5, 4);
console.log(circle.area());
console.log(rect.area());
console.log(triangle.area());
