var nave, naveImg;
var bg1;
var alien1, alien1_img;
var alien2, alien2_img;
var alien3, alien3_img;
var alienGroup1, alienGroup2, alienGroup3;
var tiros = [];


function preload(){
  naveImg = loadImage("imagens/nave.png");
  bg1 = loadImage("imagens/bg1.png");
  alien1_img = loadImage("imagens/alien1.png");
  alien2_img = loadImage("imagens/alien2.png");
  alien3_img = loadImage("imagens/alien3.png");
  
}

function setup() {
  canvas = createCanvas(500, 495);

  nave = createSprite(250, 450, 10, 10);
  nave.addImage(naveImg);
  nave.scale = 0.15;

  alienGroup1 = createGroup();
  alienGroup2 = createGroup();
  alienGroup3 = createGroup();

  for(var i = 50; i <= 450; i+=100){
    alien1 = createSprite(i, 50, 10, 10);
    alien1.addImage(alien1_img);
    alien1.scale = 0.12;
    alienGroup1.add(alien1);
  }

  for(var j = 40; j <= 470; j += 70){
    alien2 = createSprite(j, 120, 10, 10);
    alien2.addImage(alien2_img);
    alien2.scale = 0.15;
    alienGroup2.add(alien2);
  }

  for(var k = 50; k <= 450; k += 50){
    alien3 = createSprite(k, 190, 10, 10);
    alien3.addImage(alien3_img);
    alien3.scale = 0.12;
    alienGroup3.add(alien3);
  }

}

function draw() {
  background(bg1);
  
  if(keyDown("RIGHT_ARROW") && nave.x < 460){
    nave.x += 10;
  }
  if(keyDown("LEFT_ARROW") && nave.x > 40){
    nave.x -= 10;
  }

  
 
  // console.log(tiro.y);
  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    var tiro = createSprite(nave.x, nave.y, 8, 20);
    tiro.shapeColor = "black";
    tiros.push(tiro);
  }
}

function keyReleased(){
  if(keyCode === 32 && tiros[tiros.length-1].y > 360){
      for(var t = 0; t < tiros.length; t++){
      // tiros[tiros.length-1].y -= 5;
      Matter.Body.setVelocity(tiros[tiros.length-1], {
        x: 0,
        y: -5
      })
    }
  }
}
