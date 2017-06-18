
var squares = document.querySelectorAll(".square");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomRGB() {
  var red = getRandomInt(0, 256);
  var green = getRandomInt(0, 256);
  var blue = getRandomInt(0, 256);
  var rgb = "rgb(" + red + ", " +
                     green + ", " +
                     blue + ")";
  return rgb;
}

squares.forEach(function(square) {
  square.style.backgroundColor = getRandomRGB();
});
