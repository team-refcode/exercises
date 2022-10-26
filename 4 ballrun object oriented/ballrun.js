let allBalls = [];

let moveAllBalls = () => {
  allBalls.forEach((ball) => {
    // This line will be run once on every single ball that is in `allBalls`.
    // Call the `move` method on the ball. In this context the ball is `ball`.
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
    // This is the constructor method. It has the same job as the `constructBall`
    // function from the last lesson.
    //   1. Copy over the content of `constructBall` into this method.
    //   2. Change `ballObject` to `this`.
    //   3. Instead of bringing in the `domElement` properties,  just put
    //       this line once:
    //       this.domElement = this.buildBallDOMElement();

  }

  move = () => {
    // Create newPos object and set the X  and Y values of this to velocity plus
    // the current position.
    let newPos = {
      x: 0,// instead of 0, this should be the x velocity plus the x position
      y: 0,// instead of 0, this should be the y velocity plus the y position
    }
    this.setPosition(newPos);
    this.drawPosition(newPos);
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
  // make a new instance of the Ball class, and add it to the `allBalls` array.
}

// This is time:
//setInterval(moveAllBalls, 100);
