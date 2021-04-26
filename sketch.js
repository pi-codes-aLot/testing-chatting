//Setting up the variables
var backg = 0;
var possible_colors = [[48, 59, 58], [253, 250, 255]];
var txtBox;

//Creating the canvas
function setup() {
  createCanvas(displayWidth, displayHeight);
  txtBox = new inputBox(0, displayHeight - 30, displayWidth);
}

//The variable "backg" is used to set the mode of the program.
// 0 means dark, while 1 means light

//By automatic default the game sets the canvas to dark mode

//Starting the code

function draw() {
  background(possible_colors[backg][0], possible_colors[backg][1], possible_colors[backg][2]);  
  txtBox.display();
}