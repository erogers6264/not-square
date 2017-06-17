var squares = document.querySelectorAll(".square");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

squares.forEach(function(square) {
  var red = getRandomInt(0, 256);
  var green = getRandomInt(0, 256);
  var blue = getRandomInt(0, 256);
  square.style.backgroundColor = "rgb(" + red + ", " +
                                          green + ", " +
                                          blue + ")";
});
