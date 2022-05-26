class Ninja {
    constructor(x,y,wight,height,speed) {
        this.x = x;
        this.y = y;
        this.wight = wight ;
        this.height = height;
        this.speed = speed;
    }

    moveUp() {
        this.y -=  this.speed
    }
    moveDown() {
        this.y += this.speed
    }
    moveRight() {
        this.x +=  this.speed
    }
    moveLeft() {
        this.x -=  this.speed
    }

    drawn(ctx, src) {
            let len = new Image(100,100)
            len.src = src;
            ctx.drawImage(len,this.x,this.y);
    }    
}