function Game(canvas) {
    const CONTROL_MOVE_LEFT = 97
    const CONTROL_MOVE_RIGHT = 100
    const CONTROL_MOVE_UP = 119
    const CONTROL_MOVE_DOWN = 115
    const CONTROL_FIRE = 13

    this.canvas = canvas;
    let playerTank = initNewTank();
    let enemyTank = initNewEnemyTank();
    let bullets = [];
    let ctx = this.canvas.getContext("2d");

    this.requestNextFrame = function () {
        moveTank();
        moveEnemyTank();
        moveBullet();
        stopTank();
        stopEnemyTank();
        checkBulletHitTank();
        removeDamageTank();
    }
    this.draw = function () {

        clearCanvas();
        drawTank();
        drawEnemyTank();
        drawBullet();

    }

    this.control = function (controlCode) {
        switch (controlCode) {
            case CONTROL_MOVE_LEFT:
                playerTank.turnLeft();
                break;

            case CONTROL_MOVE_RIGHT:
                playerTank.turnRight();
                break;
            case CONTROL_MOVE_UP:
                playerTank.turnUp();
                break;
            case CONTROL_MOVE_DOWN:
                playerTank.turnDown();
                break;
            case CONTROL_FIRE:
                bullets.push(playerTank.fire())
        }
    }
    function initNewTank() {
        return new Tank(0, 0)
    }
    function initNewEnemyTank() {
        return new enemyTank2(100, 100)
    }
    function moveTank() {
        playerTank.run();
    }
    function moveEnemyTank() {
        enemyTank.run();
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
        playerTank.draw(ctx);
    }
    function drawEnemyTank() {
        enemyTank.draw(ctx);
    }
    function drawBullet() {
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].draw(ctx)
        }
    }
    function stopTank() {
        playerTank.stop();
    }
    function stopEnemyTank() {
        enemyTank.stop();
    }
    function checkBulletHitTank() {
        for (let i = 0; i < bullets.length; i++) {
            if (bullets[i].isHit(enemyTank)) {
                bullets[i].damage(enemyTank)
            }
        }
    }
    function removeDamageTank() {
        if (enemyTank.hp === 0) {
            enemyTank = initNewEnemyTank();
        }

    }
}
