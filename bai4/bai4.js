function createCircle(){
let hinhtron2 = new Cricle()

hinhtron2.x = +Math.random()* window.innerHeight
hinhtron2.y = +Math.random()* window.innerHeight
hinhtron2.radius = Math.floor(Math.random()*50)



    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.arc(hinhtron2.x, hinhtron2.y, hinhtron2.radius, 0,2 * Math.PI);
    ctx.fillStyle = hinhtron2.getMau();
    ctx.fill();
}