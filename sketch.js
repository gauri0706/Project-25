
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj = new Paper(200,450,100,100);
	
	var render = Render.create({
		element : document.body ,
		engine : engine ,
		options : {
			width: 1400,
			height: 700,
			wireframes: false
		}
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  paperObj.display();

  keyPressed();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:50 ,y: -100});
	}
}