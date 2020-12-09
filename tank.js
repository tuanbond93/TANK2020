function Tank(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 1;
    this.run = function () {
        this.x += this.vx
        this.y += this.vy
    }
    this.draw = function (ctx) {
        let img = new Image()
        img.src = "tank.png"
        ctx.drawImage(img, this.x, this.y);
    }
}
