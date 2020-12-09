function Game(canvas) {
    this.canvas = canvas;
    let tanks = [];
    let ctx = this.canvas.getContext("2d");
    tanks.push(initNewTank());
    this.requestNextFrame = function () {
        moveTank();
    }
    this.draw = function () {
        
        clearCanvas();
        drawTank();
    }
    function initNewTank() {
        return new Tank(1,1)
    }
    function moveTank() {
        for (let i = 0; i < tanks.length; i++) {
            tanks[i].run();
        }
    }
    function clearCanvas() {
        ctx.clearRect(0, 0, parseInt(canvas.width), parseInt(canvas.height));
    }
    function drawTank() {
        for (let i = 0; i < tanks.length; i++) {
            console.log(tanks[i])
            tanks[i].draw(ctx);
        }
    }
    console.log(tanks)
}
