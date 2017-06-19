
var colors = [];
var squares = document.querySelectorAll(".square");
for (var i = squares.length - 1; i >= 0; i--) {
  colors.push(getRandomRGB());
}
var pickedColor = colors[getRandomInt(0, colors.length)];

var h1 = document.querySelector("h1");
var t = document.createTextNode(" " + pickedColor);
h1.appendChild(t);

var statusDisplay = document.querySelector("#statusDisplay")

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomRGB() {
  // Returns a string containing a random RGB style property.
  var red = getRandomInt(0, 256);
  var green = getRandomInt(0, 256);
  var blue = getRandomInt(0, 256);
  var rgb = "rgb(" + red + ", " +
                     green + ", " +
                     blue + ")";
  return rgb;
}

function changeColors(color) {
  squares.forEach(function(square) {
    square.style.backgroundColor = color;
  })
}

var colorCounter = 0;
squares.forEach(function(square) {
  square.style.backgroundColor = colors[colorCounter];
  colorCounter++;
  square.addEventListener("click", function() {
    if (square.style.backgroundColor === pickedColor) {
      statusDisplay.textContent = "You're Right!";
      changeColors(pickedColor);
      h1.style.backgroundColor = pickedColor;
    } else {
      square.style.backgroundColor = "#232323";
      statusDisplay.textContent = "Try Again";
    }
  })
});
