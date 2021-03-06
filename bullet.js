function Bullet(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.runLeft = function () {
        this.vx = -2
        this.vy = 0

    }
    this.runRight = function () {
        this.vx = 2
        this.vy = 0

    }
    this.runUp = function () {
        this.vx = 0
        this.vy = -2

    }
    this.runDown = function () {
        this.vx = 0
        this.vy = 2

    }

    this.run = function () {

        this.x += this.vx
        this.y += this.vy
    }
    this.draw = function (ctx) {
        if (this.vx === -2) {
            let img = new Image()
            img.src = "bulletLeft.png"
            ctx.drawImage(img, this.x, this.y);
        }
        if (this.vx === 2) {
            let img = new Image()
            img.src = "bulletRight.png"
            ctx.drawImage(img, this.x, this.y);
        }
        if (this.vy === -2) {
            let img = new Image()
            img.src = "bulletUp.png"
            ctx.drawImage(img, this.x, this.y);
        }
        if (this.vy === 2) {
            let img = new Image()
            img.src = "bulletDown.png"
            ctx.drawImage(img, this.x, this.y);
        }
    }
    this.isHit = function(tank) {
        if (this.x >= tank.x && this.x <= (tank.x + 19) && this.y >= tank.y && this.y <= (tank.y + 19) ) {
            return true
        } 
        return false
        
    }

    this.damage = function(tank) {
        tank.hp = 0;
    }
    
}
