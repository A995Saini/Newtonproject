
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,ball5

function preload()


{
	
}

function setup() {
	createCanvas(800, 700);
	ball1=new Ball(100,400,20)
	ball2=new Ball(100,400,20)
	ball3=new Ball(100,400,20)
	ball4=new Ball(100,400,20)
	ball5=new Ball(100,400,20)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(244);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  drawSprites();
 
}



