class Paper {
    constructor(x, y, r){
        var options = {
            isStatic: false,
            friction: 0.5,
            density: 1.2, 
            restitution: 0.3
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r);
        pop();
    }

}