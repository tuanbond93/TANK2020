function Tank(x, y) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
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
