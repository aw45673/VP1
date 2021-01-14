var dog,happyDog,foodS,foodStock;
var database

function preload()
{
dog=loadImage("dogImg.png")
happyDog=loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  
  foodStock=database.ref('food');
   foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)

if (keyWentDown("UP_ARROW")){
  writeStock(foodS);
  dog.addImage(dogHappy)
}
text("Press UP_ARROW Key To Feed Drago Milk!")
textSize(2)
fill("Green")
stroke(2)

  drawSprites();
  //add styles here

}



