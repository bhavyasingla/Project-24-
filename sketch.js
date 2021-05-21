
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box2 = new Box(670,620,20,100,"white");
	box3 = new Box(550,620,20,100,"white");
	box1 = new Box(610,660,100,20,"white");

  ground = new Ground(400,680,800,20,"yellow"); 

  paper = new Paper(100,600,10);

	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();

  drawSprites();
 
}

function keyPressed() {

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
  }
}

