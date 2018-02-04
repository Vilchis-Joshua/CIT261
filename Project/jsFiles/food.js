function Food() {
    this.x = random(width);
    this.y = random(height);

    this.update = function () {

    }

    this.show = function () {

        fill(255, 0, 100);
        rect(this.x, this.y, scl, scl);
    }
}