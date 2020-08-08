var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  // MODE BUTTONS
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      console.log(i);
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      console.log(this.textContent);
      this.classList.add("selected");
      this.textContent === "Easy"
        ? (numberOfSquares = 3)
        : (numberOfSquares = 6);
      reset();
    });
  }

  // HANDLES SQUARES
  for (var i = 0; i < squares.length; i++) {
    //Add click listeners to squares
    squares[i].addEventListener("click", function () {
      //Grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // WHEN USER GUESSES CORRECTLY
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeAllColors(clickedColor);
        resetButton.textContent = "Play Again?";
        h1.style.backgroundColor = clickedColor;
      }
      // WHEN USER GUESSES INCORRECTLY
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }

  reset();
}

function reset() {
  console.log(numberOfSquares);
  colors = generateRandomColors(numberOfSquares);
  //Pick a new randomColor from array
  pickedColor = pickColor();
  //Change color display to match picked color
  colorDisplay.textContent = pickedColor;
  //Sets reset button back to new colors if you click "Play Again"
  resetButton.textContent = "New Colors";
  //When you reset the game changes display message to empty so nothing is displayed
  messageDisplay.textContent = "";
  //Reset h1 banner color
  h1.style.backgroundColor = "steelblue";
  //Change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
      console.log(squares[i]);
    } else {
      squares[i].style.display = "none";
      console.log(squares[i]);
    }
  }
}

resetButton.addEventListener("click", function () {
  reset();
});

function changeAllColors(color) {
  //Loop through all squares and change each one to match given color
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //Make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //Return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  var randomRed = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var randomGreen = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var randomBlue = Math.floor(Math.random() * 256);
  return "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
}
