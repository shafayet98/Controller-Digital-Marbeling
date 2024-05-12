var circleRadius;
let drops = [];

function setup(){   
    let cnv = createCanvas(450,500);
    cnv.position(520, 10);
    
}

function mousePressed(){
    let drop = new Drop(mouseX, mouseY, circleRadius);

    // add the effect
    for (let other of drops){
        other.marbel(drop);
    }
    drops.push(drop);
}

function draw(){
    background(0);
    for(let drop of drops){
        drop.show();
    }
}