function Food() {
    this.x = 0;
    this.y = 0;
    this.pos = createVector(floor(random(width / scl), floor(random(height / scl))));

    this.show = function () {
        fill(255, 0, 100);
        rect(this.pos.x, this.pos.y, scl, scl);
    }

    this.pickLocation = function() {
        var cols = floor(width / scl);
        var rows = floor(height / scl);
        this.pos = createVector(floor(random(cols), floor(random(rows))));
        this.pos.mult(scl);
    }
}