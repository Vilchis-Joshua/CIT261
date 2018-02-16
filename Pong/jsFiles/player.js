// Player object 

function Player(ctx, number) {

    this.ctx = ctx;

    this.value = 40;
    this.number = number;
    this.score = 0;

    this.height = 70;
    this.thickness = 8;
}



Player.prototype = {

    constructor: Player,


    // Functions
    getNumber: function () {
        return this.number;
    },

    getScore: function () {
        return this.score;
    },

    getValue: function () {
        return this.value;
    },

    addScore: function () {
        this.score++;
    },

    displayScore: function (playerNumber) {
        if (playerNumber == 1) {
            thix.ctx.fillText(this.score, 100, 100);
        } else {
            thix.ctx.fillText(this.score, c.width - 100, 100);
        }
    },

    displayWinner: function (playerNumber) {
        this.ctx.fillText(("Player " + playerNumber + " is the winner!"), c.width / 2, c.height / 2);
    },

    draw: function () {
        if (this.number == 1) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, this.value, this.thickness, this.height);
        } else {
            ctx.fillStyle = 'white';
            ctx.fillRect(c.width - this.thickness, this.value, this.thickness, this.height);
        }
    }
}