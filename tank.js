function Tank(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 1;

    let imgLeft = new Image()
    imgLeft.src = "tankLeft.png"
    let imgRight = new Image()
    imgRight.src = "tankRight.png"
    let imgUp = new Image()
    imgUp.src = "tankUp.png"
    let imgDown = new Image()
    imgDown.src = "tankDown.png"


    this.turnLeft = function () {
        this.vx = -1
        this.vy = 0

    }
    this.turnRight = function () {
        this.vx = 1
        this.vy = 0

    }
    this.turnUp = function () {
        this.vx = 0
        this.vy = -1

    }
    this.turnDown = function () {
        this.vx = 0
        this.vy = 1

    }

    this.run = function () {
        this.x += this.vx
        this.y += this.vy
    }
    this.draw = function (ctx) {
        if (this.vx === -1) {
            ctx.drawImage(imgLeft, this.x, this.y);
        } else if (this.vx === 1) {
            ctx.drawImage(imgRight, this.x, this.y);
        } else if (this.vy === -1) {
            ctx.drawImage(imgUp, this.x, this.y);
        } else if (this.vy === 1) {
            ctx.drawImage(imgDown, this.x, this.y);
        }
    }

    this.fire = function () {
        let vx = 0;
        if (this.vx > 0) {
            vx = 2;
        } else if (this.vx < 0) {
            vx = -2
        }

        let vy = 0;
        if (this.vy > 0) {
            vy = 2;
        } else if (this.vy < 0) {
            vy = -2
        }
        return new Bullet(this.x, this.y, vx, vy);
    }
}
