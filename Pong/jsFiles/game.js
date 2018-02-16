
function Game(isStarted, ctx) {
    this.isStarted = isStarted;
    this.isStopped;
    this.ctx = ctx;
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, c.width, c.height);
}



Game.prototype = {

    constructor: Game,


    getStartedValue: function () {
        return Boolean(this.isStarted);
    },

    stop: function () {
        this.isStarted = false;
        this.isStopped = true;
    },

    start: function () {
        this.isStopped = false;
        this.isStarted = true;
    }
}