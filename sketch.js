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


///variables for anchoring the first position of each object
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

	////object inserted into arrays  for building multiple object on the screen.
	trees = [
		{
			posX: tressAnchorX,
			size: random(100,125)
		},
		{
			posX: tressAnchorX + random(150,300),
			size: random(100,125)
		},
		{
			posX: tressAnchorX + random(450,550),
			size: random(100,125)
		},
		{
			posX: tressAnchorX + random(650,843),
			size: random(100,125)
		},
		{
			posX: tressAnchorX + random(1000,1208),
			size: random(100,125)
		},
		{
			posX: tressAnchorX + random(1300,1408),
			size: random(100,125)
		},
		{
			posX: tressAnchorX + random(1450,1609),
			size: random(100,125)
		},
		{
			posX: tressAnchorX + random(1780,1890),
			size: random(100,125)
		},
	];

	clouds = [
		{
			posX: cloudAnchorX,
			posY : random ( 50 , 150),
			scale: random(1.0 , 1.5)
		},
		{
			posX: cloudAnchorX + random(230,321),
			posY : random ( 50 , 150),
			scale: random(1.0 , 1.5)
		},
		{
			posX: cloudAnchorX + random(470,623),
			posY : random ( 50 , 150),
			scale: random(1.0 , 1.5)
		},
		{
			posX : cloudAnchorX + random(740,882),
			posY : random ( 50 , 150),
			scale: random(1.0 , 1.5)
		},
		{
			posX : cloudAnchorX + random(1040,1324),
			posY : random ( 50 , 150),
			scale: random(1.0 , 1.5)
		},
		{
			posX : cloudAnchorX + random(1350,1643),
			posY : random ( 50 , 150),
			scale: random(1.0 , 1.5)
		},
		{
			posX : cloudAnchorX + random(1770,1924),
			posY : random ( 50 , 150),
			scale: random(1.0 , 1.5)
		},

	];

	mountains = [
		{
			posX: mountainAnchorX,
			posY: 256
		},
		{
			posX: mountainAnchorX+ random(400,500),
			posY: 256
		},
		{
			posX: mountainAnchorX + random(700,880),
			posY: 256
		},
		{
			posX: mountainAnchorX + random(1080,1450),
			posY: 256
		},
		{
			posX: mountainAnchorX + random(1580,1750),
			posY: 256
		},
		{
			posX: mountainAnchorX + random(2080,2380),
			posY: 256
		}
	]

	canyons = [
		{
			posX : canyonAnchorX,
			width : random(50,100)
		},
		{
			posX : canyonAnchorX+random(340,450),
			width : random(50,100)
		},
		{
			posX : canyonAnchorX+random(770,860),
			width : random(50,100)
		},
		{
			posX : canyonAnchorX+random(1270,1400),
			width : random(50,100)
		},
		{
			posX : canyonAnchorX+random(1670,1780),
			width : random(50,100)
		},
		{
			posX : canyonAnchorX+random(2170,2300),
			width : random(50,100)
		},
		
	];

	collectables = [
		{
			posX: collactableAnchorX,
			posY: random(floorPos_y-10,floorPos_y-50),
			size: random(20,30)
		},
		{
			posX: collactableAnchorX + random(300,400),
			posY: random(floorPos_y-10,floorPos_y-50),
			size: random(20,30)
		},
		{
			posX: collactableAnchorX +random(480,610),
			posY: random(floorPos_y-10,floorPos_y-50),
			size: random(20,30)
		},
		{
			posX: collactableAnchorX + random(1050,1321),
			posY: random(floorPos_y-10,floorPos_y-50),
			size: random(20,30)
		},
		{
			posX: collactableAnchorX + random(1550,1690),
			posY: random(floorPos_y-10,floorPos_y-50),
			size: random(20,30)
		},
		{
			posX: collactableAnchorX + random(1670,1790),
			posY: random(floorPos_y-10,floorPos_y-50),
			size: random(20,30)
		},
	];
	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
}

function draw() {
	// fill the sky blue
	background(100, 155, 255); 
	
	////////// draw some green ground
	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height / 4);


	//push and pop to give the feeling of moving character.
	push();
	translate(scrollPos, 0);
	////////// Draw mountains.
	mountain();//calls the mountain function.
	////////// Draw trees.
	tree();//calls the tree function.
	////////// Draw clouds.
	cloud();//calls the clound function.
	////////// Draw canyons
	canyon();//calls the canyon function.
	///////// Draw collectable items
	collectable();//calls the collectable function.
	pop();


	// Draw the game character - this must be last
	gameCharacter();


	
	//// Logic to move game character

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
	//draws gamecharacter
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
	//draws multiple trees.
	for (var i=0 ; i < trees.length; i++)
	{
	fill (102,51,0);
	rect(trees[i].posX,
	     floorPos_y-height/4 ,
		 55,145);//trunk

    fill (0,125,0);
	ellipse(trees[i].posX,
		    floorPos_y-height/4,
			trees[i].size);
    ellipse(trees[i].posX+25,
		    floorPos_y -height/4,
			trees[i].size);
	ellipse(trees[i].posX+50,
		    floorPos_y-height/4 ,
			trees[i].size);
	}
}

////////////CLOUND FUNCTION////////////////
function cloud() {
	//draws multiple clouds
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
	//draws multiple mountain.   
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
	//draws multiple  canyon.
	for(var i = 0 ; i < canyons.length ; i++){
		noStroke();
		fill(48,25,52);
		rect(canyons[i].posX,floorPos_y,canyons[i].width,200);
		fill(15,94,156);
		rect(canyons[i].posX,floorPos_y+100,canyons[i].width,100);
	}
}

function collectable() {
	//draws multiple collectable.
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