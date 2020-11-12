
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(375,70,500,45);
	World.add(world,roof);

	bobObject1 = new Bob(173,500,50);
	bobObject2 = new Bob(273,500,50);
	bobObject3 = new Bob(373,500,50);
	bobObject4 = new Bob(473,500,50);
	bobObject5 = new Bob(573,500,50);

	rope1 = new Rope(bobObject1.body,roof.body,-200,0);
	rope2 = new Rope(bobObject2.body,roof.body,-100,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,100,0);
	rope5 = new Rope(bobObject5.body,roof.body,200,0);
	World.add(world,rope1);
	World.add(world,rope2);
	World.add(world,rope3);
	World.add(world,rope4);
	World.add(world,rope5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-800,y:-795});

		bobObject1.move();

		

		
	   
	 }
   }



