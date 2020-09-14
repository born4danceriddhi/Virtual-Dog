//Create variables here
var dog,happyDog;
var database,foodS,foodStock;

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  dogImg1=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  var dog=createSprite(400,400,30,40);
  dog.addImage(dogImg);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}



function draw() {  
  background(46,139,87);
  dog.display();

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1);


  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x+=0){
    x=0;
  }else{
    x-x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
}
