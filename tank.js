function Tank(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 1;
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
            let img = new Image()
            img.src = "tankLeft.png"
            ctx.drawImage(img, this.x, this.y);
        }
        if (this.vx === 1) {
            let img = new Image()
            img.src = "tankRight.png"
            ctx.drawImage(img, this.x, this.y);
        }
        if (this.vy === -1) {
            let img = new Image()
            img.src = "tankUp.png"
            ctx.drawImage(img, this.x, this.y);
        }
        if (this.vy === 1) {
            let img = new Image()
            img.src = "tankDown.png"
            ctx.drawImage(img, this.x, this.y);
        }
    }

    this.fire = function () {
        return new Bullet();
    }
}
