var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);



	engine = Engine.create();
	world = engine.world;

	paper1 = Bodies.circle(200 , 400 , 20 , {restitution:0.2, isStatic:false, density:1.2});
	World.add(world, paper1);
	boxleft= Bodies.rectangle(500,550,20,100, {isStatic:true})
	boxbottom = Bodies.rectangle(600,580,200,20, {isStatic:true})
World.add(world,boxbottom)
boxright = Bodies.rectangle(700,550,20,100, {isStatic:true})
World.add(world,boxright);


World.add(world,boxleft)
	//Create a Ground
	ground = Bodies.rectangle(width/2, 590, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(paper1.position.x,paper1.position.y,20,20);
  rect(400,650,800,10)
  drawSprites();
  rect(boxleft.position.x, boxleft.position.y,20,100)
  rect(boxbottom.position.x,boxbottom.position.y,200,20)
  rect(boxright.position.x,boxright.position.y,20,100)
}

function keyPressed() {
	if(keyCode === UP_ARROW) {

Matter.Body.applyForce(paper1,paper1.position,{x:55,y:-55})

	}
}
