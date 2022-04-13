let allBalls = [];
let moveAllBalls = () => {
  allBalls.forEach((ball) => {
    ball.move(ball.velocity);
  });
}


class Boundary {
  constructor() {
    this.width = 500;
    this.height= 500;
  }
  getWrappedX(x) {
    if (x < 0) {
      return this.width + x;
    }
    return x % this.width;
  }
  getWrappedY(y) {
    if (y < 0) {
      return this.height + y;
    }
    return y % this.height;
  }
  getWrappedPosition(pos) {
    return {x: this.getWrappedX(pos.x), y: this.getWrappedY(pos.y)}
  }
}

class Helpers {
  constructor() {
    this.CSS_COLOR_NAMES = [ "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen","Magenta", "Maroon","MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise","MediumVioletRed", "MidnightBlue","MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab","Orange", "OrangeRed","Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru","Pink", "Plum","PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon","SandyBrown", "SeaGreen","SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow","SpringGreen", "SteelBlue","Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen",
    ];
  }
  getNewBoundary = () => {
    return new Boundary();
  }
  getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  getRandomColor = () => {
    return this.CSS_COLOR_NAMES[this.getRandomNumber(0,148)];
  }
}
let helpers = new Helpers();


class Ball {
  constructor() {
    this.radius = helpers.getRandomNumber(5,90);
    this.position = {x: 250-(this.radius/2), y: 250-(this.radius/2)};
    this.color = helpers.getRandomColor();
    this.domElement = this.buildBallDOMElement();
    this.velocity = {x: helpers.getRandomNumber(-5,5), y: helpers.getRandomNumber(-5,5)}
    this.domElement.addEventListener("click", ()=>{this.touch()});
  }

  move = (vector) => {
    let newPos = {
      x: this.position.x + vector.x,
      y: this.position.y + vector.y,
    }
    this.setPosition(newPos);
    this.drawPosition(newPos);
  }
  touch = () => {
    if(this.velocity.x == 0 || this.velocity.y == 0) {
      this.velocity ={x: helpers.getRandomNumber(-5,5), y: helpers.getRandomNumber(-5,5)};
    } else {
      this.velocity = {x: 0, y: 0};
    }
  }
  setPosition = (position) => {
    this.position = helpers.getNewBoundary().getWrappedPosition(position);
  }
  drawPosition = (position) => {
    this.domElement.style.left = this.position.x + "px";
    this.domElement.style.top = this.position.y + "px";
  }
  buildBallDOMElement = () => {
    let domElement = document.createElement("div");
    domElement.setAttribute("class", "ball");
    domElement.style.width = this.radius + "px";
    domElement.style.height = this.radius + "px";
    domElement.style.top = this.position.y + "px";
    domElement.style.left = this.position.x + "px";
    domElement.style.backgroundColor = this.color;
    document.querySelector(".ballpit").appendChild(domElement);

    return domElement;
  }
}

let makeBall = () => {
  allBalls.push(new Ball());
}

setInterval(moveAllBalls, 100);
