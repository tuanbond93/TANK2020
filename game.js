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

    this.control = function() {
        console.log(a)
        if (a === 97) {
            for (let i = 0; i < tanks.length; i++) {
                tanks[i].runLeft();
            }
        }
        if (a === 100) {
            for (let i = 0; i < tanks.length; i++) {
                tanks[i].runRight();
            }
        }
        if (a === 119) {
            for (let i = 0; i < tanks.length; i++) {
                tanks[i].runUp();
            }
        }
        if (a === 115) {
            for (let i = 0; i < tanks.length; i++) {
                tanks[i].runDown();
            }
        }
    }
    
    function initNewTank() {
        return new Tank(1,0)
    }

    function moveTank() {
        //for (let i = 0; i < tanks.length; i++) {
            //tanks[i].runRight();
        //}
    }
    function clearCanvas() {
        ctx.clearRect(0, 0, parseInt(canvas.width), parseInt(canvas.height));
    }
    function drawTank() {
        for (let i = 0; i < tanks.length; i++) {
            tanks[i].draw(ctx);
        }
    }
    
}
