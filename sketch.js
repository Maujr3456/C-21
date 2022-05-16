
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ground2, ground3, ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options = {
		isStatic:true
	}
	ground = Bodies.rectangle(400, 690, 800, 10, options);
	ground2 = Bodies.rectangle(600, 635, 10, 100,options);
	ground3 = Bodies.rectangle(700, 635, 10, 100, options);

	ball = Bodies.circle(160, 600, 20)

	World.add(world, ground);
	World.add(world, ground2);
	World.add(world, ground3);
	World.add(world, ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  rect(ground.position.x, ground.position.y,800,10);
  rect(ground2.position.x, ground2.position.y, 10,100);
  rect(ground3.position.x, ground3.position.y, 10,100);
  ellipse(ball.position.x, ball.position.y, 20);

  if(keyDown('SPACE')){
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.03, y:0.03})
  }
  drawSprites();
 
}



