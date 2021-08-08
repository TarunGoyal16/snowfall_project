var bgimg,snowimg
var snow;

function preload(){
  bgimg=loadImage("snow3.jpg")
  snowimg=loadImage("smoke.png")
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(bgimg);
  snowfall()  
  drawSprites();
}

function snowfall(){
  snow=createSprite(Math.round(random(50,750)),0,20,20)
  snow.addImage(snowimg)
  snow.scale=0.5
  snow.velocityY=2
}