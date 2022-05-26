class Obstacle {
    constructor(x,y,width,height,speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }
    moveDown(){
        this.y += this.speed
    } 
    drawObstacle(ctx) {
        let image = new Image(100,100)
        image.src = "img/123.png"
        ctx.drawImage(image,this.x,this.y);
    }
}