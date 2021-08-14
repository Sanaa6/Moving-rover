canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 120 ; 
rover_height = 110 ;

background_image = "mars.jpg";
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add()
{background_img = new Image();
background_img.onload = upload_background;
background_img.src = background_image;
rover_img = new Image();
rover_img.onload = upload_rover;
rover_img.src = rover_image;}

function upload_background()
{ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}

function upload_rover()
{ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown);

function mykeydown(e)
{keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38')
 { up(); console.log("up");
 } if(keyPressed == '40')
  { down(); console.log("down");
 } if(keyPressed == '37')
  { left(); console.log("left");
 } if(keyPressed == '39') 
 { right(); console.log("right"); }}