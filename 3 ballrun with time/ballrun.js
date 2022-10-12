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
  boundary = () => {
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


var ballObject = {}

function constructBall() {
  // Add defaults to the ballObject
  ballObject.radius = 20;
  ballObject.position = ({x: 250, y: 250});
  ballObject.color = "blue";
  ballObject.velocity = ({x: 10, y: 0});
  ballObject.domElement = document.querySelector(".ball");

  // Add the following starting styles to the domElement:
  ballObject.domElement.style.width = ballObject.radius + "px";
  ballObject.domElement.style.height = ballObject.radius + "px";
  ballObject.domElement.style.backgroundColor = ballObject.color;
  ballObject.domElement.style.top = ballObject.position.y + "px";
  ballObject.domElement.style.left = ballObject.position.x + "px";

  // use setInterval to run the move function every 500ms
  // and then delete the "Move" button.

}

function move() {
  setPosition();
  drawPosition();
}

function setPosition() {
  // Add velocity to the ball object's current position.
  ballObject.position = {
    x: ballObject.position.x + ballObject.velocity.x,
    y: ballObject.position.y + ballObject.velocity.y,
  }

  // Part 2: use the helper function to get the "wrapped" position instead of just the fixed position.
  // ballObject.position = helpers.boundary().getWrappedPosition(ballObject.position);
}

function drawPosition() {
  ballObject.domElement.style.top = ballObject.position.y + "px";
  ballObject.domElement.style.left = ballObject.position.x + "px";
}
