function enemyTank2(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0
    this.vy = 0
    let count = 100
    let imgLeft = new Image()
    imgLeft.src = "tankLeft.png"
    let imgRight = new Image()
    imgRight.src = "tankRight.png"
    let imgUp = new Image()
    imgUp.src = "tankUp.png"
    let imgDown = new Image()
    imgDown.src = "tankDown.png"
    let imgExplosion = new Image()
    imgExplosion.src = "explosion.png"
    this.hp = 1;
    targetX = 300
    targetY = 300



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
        console.log(this.x, targetX, this.y, this.vx, this.vy)
        if (this.x <= targetX) {
            this.vx = 1;
            this.vy = 0;
        } else if (this.y <= targetY) {
            this.vx = 0;
            this.vy = 1;
        } else {
            targetX = 0;
            targetY = 0;
            this.vx = -1;
            this.vy = -1;
        }
        this.x += this.vx
        this.y += this.vy
    }
    this.draw = function (ctx) {
        // for (let i = 1; i < 10; i++) {
        //     this.vx = Math.floor(Math.random() * 2.5 - 0.5)
        //     this.vy = Math.floor(Math.random() * 2.5 - 0.5)
        if (this.vx === -1) {
            ctx.drawImage(imgLeft, this.x, this.y);
        } else if (this.vx === 1) {
            ctx.drawImage(imgRight, this.x, this.y);
        } else if (this.vy === -1) {
            ctx.drawImage(imgUp, this.x, this.y);
        } else if (this.vy === 1) {
            ctx.drawImage(imgDown, this.x, this.y);
        }
        // }
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
    this.stop = function () {
        if (this.x > 370) {
            this.x = (this.x - 1)
        }
        if (this.x < 0) {
            this.x = (this.x + 1)
        }
        if (this.y > 370) {
            this.y = (this.y - 1)
        }
        if (this.y < 0) {
            this.y = (this.y + 1)
        }
    }
}
