class Cricle{
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
getChiso() {
    return Math.floor(Math.random()*255);
}
getMau() {
    let red = this.getChiso();
    let blue = this.getChiso();
    let green = this.getChiso();
    return "rgb(" + red + ',' + blue + ',' + green  + ")"
}
}