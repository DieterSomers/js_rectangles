import "../../icons/svgxuse";

import Module from "./Module";

var randomColor = require("random-color");

console.log(Module());

class Rectangle {
  constructor(size, x, y) {
    this._width = size;
    this._height = size;
    this._x = x;
    this._y = y;
    this.ref = this.generateHTML();
    this.style();
    this.newBGC();
  }

  calcSurface() {
    return this._width * this._height;
  }

  static calcDistance(rect1, rect2) {
    return Math.sqrt(
      Math.pow(rect1._x - rect2._x, 2) + Math.pow(rect1._y - rect2._y, 2)
    );
  }

  //   get width() {
  //     return this._width + "px";
  //   }
  //   get height() {
  //     return this._height + "px";
  //   }
  //   get x() {
  //     return this._x + "px";
  //   }
  //   get y() {
  //     return this._y + "px";
  //   }

  //   set width(w) {
  //     this._width = w;
  //     this.style();
  //   }
  //   set height(h) {
  //     this._height = h;
  //     this.style();
  //   }
  //   set x(x) {
  //     this._x = x;
  //     this.style();
  //   }
  //   set y(y) {
  //     this._y = y;
  //     this.style();
  //   }

  generateHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div class="rectangle">${this.calcSurface()} sqp</div>`
    );
    return document.querySelector(".rectangle:last-child");
  }

  newBGC() {
    this.ref.onclick = function () {
      this.style.backgroundColor = randomColor().hexString();
    };
  }

  style() {
    this.ref.style.position = "absolute";
    this.ref.style.left = `${this._x - this._width / 2}px`;
    this.ref.style.top = `${this._y - this._height / 2}px`;
    this.ref.style.width = `${this._width}px`;
    this.ref.style.height = `${this._height}px`;
    this.ref.style.backgroundColor = randomColor().hexString();
    this.ref.style.textAlign = "center";
  }
}

/******************SHOW ME SOME RECTANGLES*********************/

var getIntRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

let rectangleCount = 25;

while (rectangleCount--) {
  new Rectangle(
    getIntRange(50, 200),
    getIntRange(100, 1820),
    getIntRange(100, 800)
  );
}

var bigRect = new Rectangle(400, 200, 200);
var smallRect = new Rectangle(20, 200, 800);

console.log(
  "The distance between the very large and very small rectangle on the left is:"
);
console.log(Rectangle.calcDistance(bigRect, smallRect));
