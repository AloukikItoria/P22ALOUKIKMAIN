const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var ground;
var helicopter,helicopterImage;
var supply,supplyImage;
var bl1,bl2,bl3

function preload(){

	helicopterImage = loadImage("helicopter.png")
    supplyImage = loadImage("package.png")


}

function setup(){
createCanvas(500,400);
engine = Engine.create();
world = engine.world;


/*//ground = createSprite(200,380,700,10);
//helicopter = createSprite(230,60,50,50);
//helicopter.addImage("image1",helicopterImage)
//helicopter.scale = (0.5)
//supply = createSprite(220,350,50,50);
//supply.addImage("image2",supplyImage)
supply.scale = (0.2)
bl1 = createSprite(180,335,10,80);
bl2 = createSprite(265,335,10,80);
bl3 = createSprite(222,380,96,10);
bl3.shapeColor = ("red")
bl2.shapeColor = ("red")
bl1.shapeColor = ("red")
ground.shapeColor = ("white")*/

// CREATING OBJETCS
var goptions= {
    isStatic:true
}
ground = Bodies.rectangle(200,380,700,10, goptions);
World.add(world, ground);

supply = Bodies.rectangle(220,60,50,50, {isStatic: true, restitution:0.8});
World.add(world, supply);

helicopter = Bodies.rectangle(230,60,50,50, goptions);
World.add(world, helicopter);


}




function draw(){


background("black")
Engine.update(engine);
imageMode(CENTER)
rectMode(CENTER);
rect(ground.position.x, ground.position.y, 700,10);
image(supplyImage,supply.position.x,supply.position.y,50,50)
image(helicopterImage,helicopter.position.x,helicopter.position.y,200,100);


}


//event triggered function
function keyPressed(){
if(keyCode=== DOWN_ARROW){
Matter.Body.setStatic(supply, false);
}


}