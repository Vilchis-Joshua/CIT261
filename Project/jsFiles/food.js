function Food() {
    this.x = 0;
    this.y = 0;

    this.update = function () {

    }

    this.show = function () {

        fill(255, 0, 100);
        rect(this.x, this.y, scl, scl);
    }

    this.make = function (x, y) {
        this.x = x;
        this.y = y;
    }
}