/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees;


function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;

	trees = [
		{
			posX: 150,
			posY: height / 1.5
		},
		{
			posX: 350,
			posY: height / 1.4
		},
		{
			posX: 870,
			posY: height / 1.6
		}
	];

	clouds = [
		{
			posX: 120,
			posY: 100,
			scale: 1.0
		},
		{
			posX: 430,
			posY: 130,
			scale: 1.5
		},
		{
			posX: 760,
			posY: 90,
			scale: 1.2
		}
	];

	mountains = [
		{
			posX: 150,
			posY: 256
		},
		{
			posX: 370,
			posY: 256
		},
		{
			posX: 680,
			posY: 256
		}
	]
	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
}

function draw() {
	background(100, 155, 255); // fill the sky blue


	// Draw mountains.
	mountain();//calls the mountain function.
	// Draw trees.
	tree();
	// draw some green ground
	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height / 4);
	// Draw clouds.
	clound();//calls the clound function.
	

	// Draw canyons

	// Draw collectable items

	// Draw the game character - this must be last
	gameCharacter();
	//////// Game character logic ///////
	// Logic to move

	if (isLeft) {
		if (gameChar_x > width * 0.2) {
			gameChar_x -= 5;
		}
		else {
			scrollPos += 5;
		}
	}

	if (isRight) {
		if (gameChar_x < width * 0.8) {
			gameChar_x += 5;
		}
		else {
			scrollPos -= 5; // negative for moving against the background
		}

	}
}

function keyPressed() {

	if (key == 'A' || keyCode == 37) {
		isLeft = true;
	}

	if (key == 'D' || keyCode == 39) {
		isRight = true;
	}

}

function keyReleased() {
	if (key == 'A' || keyCode == 37) {
		isLeft = false;
	}

	if (key == 'D' || keyCode == 39) {
		isRight = false;
	}
}

//////////GAMECHARACTER FUNCTION//////////
function gameCharacter() {

	fill(120, 120, 120);
	ellipse(gameChar_x, gameChar_y - 56, 40);
	fill(0);
	ellipse(gameChar_x - 10, gameChar_y - 56, 5);
	ellipse(gameChar_x + 10, gameChar_y - 56, 5);

	fill(0, 0, 225);
	rect(gameChar_x - 15, gameChar_y - 37, 30, 30);

	fill(0);
	rect(gameChar_x - 15, gameChar_y - 7, 10, 10);
	rect(gameChar_x + 5, gameChar_y - 7, 10, 10);

}

/////////TREE FUNCTION//////////////
function tree() {
	for (var i = 0; i < trees.length; i++) {
		noStroke();
		fill(128, 113, 83);
		ellipse(trees[i].posX,
			trees[i].posY,
			40,
			195);
		fill(58, 95, 11);
		ellipse(trees[i].posX - 40,
			trees[i].posY - 60,
			70);
		ellipse(trees[i].posX,
			trees[i].posY - 40,
			70);
		ellipse(trees[i].posX + 40,
			trees[i].posY - 60,
			70);
		ellipse(trees[i].posX,
			trees[i].posY - 90,
			70);
	}
}

////////////CLOUND FUNCTION////////////////
function clound() {
	for (var i = 0; i < clouds.length; i++) {
		noStroke();
		fill(255);
		ellipse(clouds[i].posX,
			clouds[i].posY,
			60 * clouds[i].scale);
		ellipse(clouds[i].posX + 30 * clouds[i].scale,
			clouds[i].posY - 10,
			60 * clouds[i].scale,
			80 * clouds[i].scale);
		ellipse(clouds[i].posX + 60 * clouds[i].scale,
			clouds[i].posY - 5,
			50 * clouds[i].scale,
			60 * clouds[i].scale);
		ellipse(clouds[i].posX + 90 * clouds[i].scale,
			clouds[i].posY,
			50 * clouds[i].scale);
	}
}

/////////////MOUNTAIN FUNCTION///////////
function mountain() {
	for(var i=0 ; i<mountains.length ; i++){
		noStroke();
		fill(121, 99, 66);
		triangle(
					mountains[i].posX,mountains[i].posY,
					mountains[i].posX - 100,mountains[i].posY + 176,
					mountains[i].posX + 100,mountains[i].posY + 176
				);
		fill(255);
		triangle(
					mountains[i].posX, mountains[i].posY,
					mountains[i].posX - 53, mountains[i].posY + 94, 
					mountains[i].posX + 53, mountains[i].posY + 94
				);
	}
}