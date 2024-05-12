var circleRadius;
let drops = [];
var genColorR = 255;
var genColorG = 255;
var genColorB = 255;
var alphaVal = 255;
var enableMousePaint;
var enableAutogenerator;

function setup() {
    let cnv = createCanvas(450, 500);
    cnv.position(520, 10);

}

function mousePressed() {
    if (enableMousePaint === true) {
        let drop = new Drop(mouseX, mouseY, circleRadius);
        // add the effect
        for (let other of drops) {
            other.marbel(drop);
        }
        drops.push(drop);
    }
}

function addInk(x, y, r) {
    if (enableAutogenerator) {
        let drop = new Drop(x, y, circleRadius);
        // add the effect
        for (let other of drops) {
            other.marbel(drop);
        }
        drops.push(drop);
    }
}

function draw() {

    let x = random(width);
    let y = random(height);
    addInk(x, y, circleRadius);

    background(0);
    for (let drop of drops) {
        drop.show(genColorR, genColorG, genColorB, alphaVal);
    }
}