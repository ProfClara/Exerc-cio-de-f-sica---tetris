
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var solo;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

// 	primeiro passo é colocar cód para o objeto se manter parado
	options={
		isStatic:true
	}

	options2={
		restitution:0.2
	}
//Criar o objeto retaqngular
	solo=Bodies.rectangle(width/2, height-50,width,15,options)

	bolinha=Bodies.circle(width/2, 200,35,options2)
//tRAZE-LO 	AO MUNDO DO JOGO
	World.add(world,solo)
	World.add(world,bolinha)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  Engine.update(engine);
//DEIXA-LO VISÍVEL
 fill("black")	;
 noStroke()
  rect(solo.position.x, solo.position.y,width,15)

  ellipse(bolinha.position.x, bolinha.position.y,35,35)

  drawSprites();
 
}



