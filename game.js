function Game(canvas) {
    this.canvas = canvas;
    let tanks = [];
    let ctx = this.canvas.getContext("2d");
    this.requestNextFrame = function () {
        tanks.push(initNewTank());
        moveTank();
    }

    this.draw = function () {
        clearCanvas();
        drawTank();
    }
    function moveTank() {
        for (let i = 1; i <= tanks.length; i++) {
            tanks[i].run();
        }
    }
    function drawTank() {
        for (let i = 1; i <= tanks.length; i++) {
            tanks[i].draw(ctx);
        }
    }
    function clearCanvas() {
        ctx.clearRect(0, 0, parseInt(canvas.width), parseInt(canvas.height));
    }
    function initNewTank() {    
        new Tank(1,1)
    }
}