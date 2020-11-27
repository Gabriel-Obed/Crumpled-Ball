
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground;
var bin1, bin2, bin3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//Creating paper
	paper = new Paper(150, 550, 25);
	//creating the ground
	ground = new Ground(500, 680, 1500, 10);	
	//creating the bin
	bin1 = new Bin (800, 665, 200, 15);
	bin2 =  new Bin(906, 625, 15, 100);
	bin3 = new Bin(695, 625, 15, 100);
    keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position,{x:95,y:-110});

	}
}

