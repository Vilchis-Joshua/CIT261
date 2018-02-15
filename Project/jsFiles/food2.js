function Food(ctx) {
    this.x = 0;
    this.y = 0;
    this.pos = [this.x, this.y];
    this.ctx = ctx;
    this.ctx.fillStyle = "red";

    this.show = function () {
        console.log("x: " + this.pos[0] + " y: " + this.pos[1]);
        this.ctx.rect(this.pos[0], this.pos[1], scl, scl);
        this.ctx.fillStyle = "red";
        this.ctx.fill();
    }

    this.pickLocation = function () {
        var cols = Math.floor(c.width / scl);
        var rows = Math.floor(c.height / scl);
        this.pos[0] = Math.floor((Math.random() * canvasWidth) / -scl);
        this.pos[1] = Math.floor((Math.random() * canvasHeight) / -scl);
        //this.mat.multiply(this.pos[0]);
    }
}

//function Food() {
//    this.x = 0;
//    this.y = 0;
//    this.pos = createVector(floor(random(width / scl)), floor(random(height / scl)));

//    this.show = function () {
//        fill(255, 0, 100);
//        rect(this.pos.x, this.pos.y, scl, scl);
//    }

//    this.pickLocation = function() {
//        var cols = floor(width / scl);
//        var rows = floor(height / scl);
//        this.pos = createVector(floor(random(cols)), floor(random(rows)));
//        this.pos.mult(scl);
//    }
//}