var move,fix; 
function setup() { createCanvas(900,600); 
  move=createSprite(400, 200, 50, 80); 
  fix=createSprite(400, 400, 80, 30); 
  move.shapeColor="yellow";
   fix.shapeColor="blue";
    move.debug=true; fix.debug=true;
   } 
   function draw() { background(0); 
    move.x=mouseX; move.y=mouseY; 

    if(move.x-fix.x<fix.width/2+move.width/2 && fix.x-move.x<fix.width+move.width/2 &&move.y-fix.y<fix.width/2+move.width/2 && fix.y-move.y<fix.width+move.width/2)
    { move.shapeColor="red"; }
    else{move.shapeColor="yellow";
    }
    
     drawSprites(); }

