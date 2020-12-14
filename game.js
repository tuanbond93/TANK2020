function Game(canvas) {
    const CONTROL_MOVE_LEFT = 97
    const CONTROL_MOVE_RIGHT = 100
    const CONTROL_MOVE_UP = 119
    const CONTROL_MOVE_DOWN = 115
    const CONTROL_FIRE = 13

    this.canvas = canvas;
    let tanks = [];
    let bullets = [];
    let ctx = this.canvas.getContext("2d");
    tanks.push(initNewTank());

    this.requestNextFrame = function () {
        moveTank();
        moveBullet();
    }
    this.draw = function () {

        clearCanvas();
        drawTank();
        drawBullet();
    }

    this.control = function (controlCode) {
        console.log(controlCode)
        switch (controlCode) {
            case CONTROL_MOVE_LEFT:
                for (let i = 0; i < tanks.length; i++) {
                    tanks[i].runLeft();
                }
                break;

            case CONTROL_MOVE_RIGHT:
                for (let i = 0; i < tanks.length; i++) {
                    tanks[i].runRight();
                }
                break;
            case CONTROL_MOVE_UP:
                for (let i = 0; i < tanks.length; i++) {
                    tanks[i].runUp();
                }
                break;
            case CONTROL_MOVE_DOWN:
                for (let i = 0; i < tanks.length; i++) {
                    tanks[i].runDown();
                }
                break;
            case CONTROL_FIRE:
                bullets.push(initNewBullet());
                for (let i = 0; i < bullets.length; i++) {
                    bullets[i].run();
                    bullets[i].x = tanks[i].x
                    bullets[i].y = tanks[i].y
                    console.log(bullets[i])
                    console.log(tanks[i])
                    console.log(tanks[i].x)
                }
                break
        }
    }

    function initNewTank() {
        return new Tank(0, 0)
    }

    function initNewBullet() {
        return new Bullet()
    }

    function moveTank() {
        for (let i = 0; i < tanks.length; i++) {
            tanks[i].run();
        }
    }
    function moveBullet() {
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].run();
        }
    }
    function clearCanvas() {
        ctx.clearRect(0, 0, parseInt(canvas.width), parseInt(canvas.height));
    }
    function drawTank() {
        for (let i = 0; i < tanks.length; i++) {
            tanks[i].draw(ctx);
        }
    }
    function drawBullet() {
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].draw(ctx)
        }
    }
}
