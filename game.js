function Game(canvas) {
    this.canvas = canvas;
    let tanks = [];
    let ctx = this.canvas.getContext("2d");
    let tank = initNewTank();
    console.log (tank)
    tanks.push(tank)
    this.requestNextFrame = function () {
       
        moveTank();
    }

    this.draw = function () {
        clearCanvas();
        drawTank();
    }
    function moveTank() {
        for (let i = 0; i <= tanks.length; i++) {
            console.log(tanks[i])
            tanks[i].run();
            
        }
        
    }
    function drawTank() {
        for (let i = 0; i <= tanks.length; i++) {
            tanks[i].draw(ctx);
        }
    }
    function clearCanvas() {
        ctx.clearRect(0, 0, parseInt(canvas.width), parseInt(canvas.height));
    }
    function initNewTank() { 
        let tank = new Tank()   
        console.log(tank)
        return tank
    }
}