var circleResolution;

class Drop {

    constructor(x, y, r) {
        this.center = createVector(x, y);
        this.r = r;
        this.vertices = [];

        for (let i = 0; i < circleResolution; i++) {
            let angle = map(i, 0, circleResolution, 0, TWO_PI);
            let v = createVector(cos(angle), sin(angle));
            v.mult(this.r);
            v.add(this.center);
            this.vertices[i] = v;
        }
        // this.color = 255;
    }

    marbel(other) {
        for (let v of this.vertices) {
            let c = other.center;
            let r = other.r;
            let p = v.copy();
            p.sub(c);
            let m = p.mag();
            let root = sqrt(1 + (r * r) / (m * m));
            p.mult(root);
            p.add(c);
            v.set(p);
        }
    }

    show(genColorR,genColorG,genColorB,alphaVal) {
        let c = color(genColorR,genColorG,genColorB,alphaVal);
        fill(c);
        beginShape();
        for (let v of this.vertices) {
            vertex(v.x, v.y);
        }
        endShape(CLOSE);
    }
}