var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor = colors[getRandomInt(0, colors.length)];
var h1 = document.querySelector("h1");
var colorDisplay = document.querySelector("#colorDisplay");
var resetButton = document.querySelector("#resetButton");
resetButton.addEventListener('click', function () {resetColors();});

colorDisplay.textContent = pickedColor;
for (var i = squares.length - 1; i >= 0; i--) {
  colors.push(getRandomRGB());
}

var easyBtn = document.querySelector("#easyBtn")
easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
})

var hardBtn = document.querySelector("#hardBtn")
hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
})

function resetColors (){
  //reset the colors array
  colors = []
  for (var i = squares.length - 1; i >= 0; i--) {
    colors.push(getRandomRGB());
  }
  pickedColor = colors[getRandomInt(0, colors.length)];

  //update status to '' and display to show picked color
  colorDisplay.textContent = pickedColor;
  document.querySelector("#status").textContent = "";

  resetButton.textContent = "New Colors";
  //update the color of the h1 and each square
  h1.style.backgroundColor = '';
  var colorCounter = 0;
  squares.forEach(function(square) {
    square.style.backgroundColor = colors[colorCounter];
    colorCounter++;
  });
}

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
      document.querySelector("#status").textContent = "You're Right!";
      changeColors(pickedColor);
      h1.style.backgroundColor = pickedColor;
      resetButton.textContent = "Play Again";

    } else {
      square.style.backgroundColor = "#232323";
      document.querySelector("#status").textContent = "Try Again";
    }
  })
});
