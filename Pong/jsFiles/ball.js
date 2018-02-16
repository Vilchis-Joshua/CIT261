// Ball object

function Ball(ctx, x, y, radius) {
    this.ctx = ctx;
    this.x = x - this.radius / 2;
    this.y = y - this.radius / 2;
    this.pos = new Point(this.x, this.y);
    this.vector = new Vector(getRandomFloat(-5.0, 5.0), getRandomFloat(-5.0, 5.0));
    this.radius = radius;
}


// Ball prototype

Ball.prototype = {

    // Constructor
    constructor: Ball,

    // Functions
    getRadius: function () {
        return this.radius;
    },

    advance: function () {
        var x = this.pos.x + this.vector.dx;
        if (x < (-c.width / 2)) {
            x += c.width;
        }

        if (x > (c.height / 2)) {
            x -= c.width;
        }

        var y = this.pos.y + this.vec.dy;
        if (y < (-c.width / 2)) {
            y += c.height;
        }

        if (y > (c.height / 2)) {
            y -= c.height;
        }

        this.pos.x = x;
        this.pos.y = y;

        this.angle += this.angleIncrease;
    },

    setDead: function () {
        this.bLiving = false;
    },

    isDead: function () {
        return (!this.bLiving);
    },


    draw: function () {
        var newPos = new Point(0, 0);
        newPos.copy(this.pos);

        var mat = new Matrix();
        this.ctx.beginPath();
        this.ctx.arc(50, 50, this.radius, 0, 2 * Math.PI);
    }
}