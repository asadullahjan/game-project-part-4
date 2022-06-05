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
var canyons;
var collectables;


var tressAnchorX = 270;
var cloudAnchorX = 150;
var mountainAnchorX = 150;
var canyonAnchorX = 100;
var collactableAnchorX = 270;

function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;

	trees = [
		{
			posX: tressAnchorX,
			posY: height / random(1.4,1.6)
		},
		{
			posX: tressAnchorX + 200,
			posY: height / random(1.4,1.6)
		},
		{
			posX: tressAnchorX + 380,
			posY: height / random(1.4,1.6)
		},
		{
			posX: tressAnchorX + 650,
			posY: height / random(1.4,1.6)
		}
	];

	clouds = [
		{
			posX: cloudAnchorX,
			posY : random ( 50 , 150),
			scale: random(1.0 , 1.5)
		},
		{
			posX: cloudAnchorX +230,
			posY : random ( 50 , 150),
			scale: random(1.0 , 1.5)
		},
		{
			posX: cloudAnchorX + 470,
			posY : random ( 50 , 150),
			scale: random(1.0 , 1.5)
		},
		{
			posX : cloudAnchorX + 740,
			posY : random ( 50 , 150),
			scale: random(1.0 , 1.5)
		}
	];

	mountains = [
		{
			posX: mountainAnchorX,
			posY: 256
		},
		{
			posX: mountainAnchorX+350,
			posY: 256
		},
		{
			posX: mountainAnchorX + 680,
			posY: 256
		}
	]

	canyons = [
		{
			posX : canyonAnchorX,
			width : random(50,100)
		},
		{
			posX : canyonAnchorX+340,
			width : random(50,100)
		},
		{
			posX : canyonAnchorX+770,
			width : random(50,100)
		}
		
	];

	collectables = [
		{
			posX: collactableAnchorX,
			posY: random(floorPos_y,floorPos_y-50),
			size: random(20,40)
		},
		{
			posX: collactableAnchorX + 300,
			posY: random(floorPos_y,floorPos_y-50),
			size: random(20,40)
		},
		{
			posX: collactableAnchorX +450,
			posY: random(floorPos_y,floorPos_y-50),
			size: random(20,40)
		}
	];
	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
}

function draw() {
	background(100, 155, 255); // fill the sky blue


	////////// Draw mountains.
	mountain();//calls the mountain function.
	
	////////// Draw trees.
	tree();
	
	////////// draw some green ground
	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height / 4);
	
	////////// Draw clouds.
	clound();//calls the clound function.
	

	////////// Draw canyons
	canyon();

	///////// Draw collectable items
	collectable();

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
function canyon() {
	for(var i = 0 ; i < canyons.length ; i++){
		noStroke();
		fill(48,25,52);
		rect(canyons[i].posX,floorPos_y,canyons[i].width,200);
		fill(15,94,156);
		rect(canyons[i].posX,floorPos_y+100,canyons[i].width,100);
	}
}

function collectable() {
	for(var i = 0 ; i<collectables.length ; i++){
		strokeWeight(2);
		stroke(0,255,0);
		line(collectables[i].posX+3,collectables[i].posY,collectables[i].posX+7,collectables[i].posY-collectables[i].size);
		noStroke();
		fill(255,0,0);
		ellipse(collectables[i].posX,collectables[i].posY+5,collectables[i].size/2,collectables[i].size);
		ellipse(collectables[i].posX+7,collectables[i].posY+5,collectables[i].size/2,collectables[i].size);

	}
}