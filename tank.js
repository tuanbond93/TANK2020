function Tank(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0
    this.vy = 1
    this.run = function () {
        this.x += this.vX
        this.y += this.vY
    }
    this.draw = function (ctx) {
        let img = new Image()
        img.src = "car.png"
        ctx.drawImage(img, this.x, this.y);
    }
}
