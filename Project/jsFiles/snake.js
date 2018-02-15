function Snake(ctx) {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    this.ctx = ctx;

    this.update = function () {
        if (this.total === this.tail.length) {
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        var snakePos = [this.x, this.y];
        this.tail[this.total - 1] = snakePos;

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        //if (this.x < (ctx.width - scl) || this.x <= 0) {
        //    alert("game over");
        //} else if (this.y < (ctx.height - scl) || this.y <= 0) {
        //    alert("game over");
        //}
    }

    this.show = function () {
        for (var i = 0; i < this.tail.length; i++) {
            console.log("total i: " + i);
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        
        this.ctx.fill();
        this.ctx.rect(this.x, this.y, scl, scl);
    }

    this.direction = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function (pos) {
        var x_value = (this.x - pos[0]);
        var y_value = (this.y - pos[1]);
        var d = Math.sqrt((x_value * x_value) + (y_value * y_value));
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.die = function () {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 2) {
                this.total = 0;
                this.tail = [];
            }
        }
    }
}