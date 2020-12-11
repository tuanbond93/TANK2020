function Tank(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.runLeft = function () {
        this.vx = -1
        this.vy = 0
        this.x += this.vx
        this.y += this.vy
    }
    this.runRight = function () {
        this.vx = 1
        this.vy = 0
        this.x += this.vx
        this.y += this.vy
    }
    this.runUp = function () {
        this.vx = 0
        this.vy = -1
        this.x += this.vx
        this.y += this.vy
    }
    this.runDown = function () {
        this.vx = 0
        this.vy = 1
        this.x += this.vx
        this.y += this.vy
    }
    this.draw = function (ctx) {
        let img = new Image()
        img.src = "tank.png"
        ctx.drawImage(img, this.x, this.y);
    }
}
