

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let ninja = new Ninja(240, 500, 5, 50, 30);
let toado = Math.floor(Math.random() * 5)
let obstacle = new Obstacle();
let src = "img/down1.png";
// let input = parseFloat(document.getElementById('input').value) ;
let scrore = 0
let arrObstacle = [];


function move() {
    switch (event.keyCode) {
        case 37: {
            ninja.moveLeft();
            if (src == "img/left1.png") {
                src = "img/left2.png" 
            }
            else {
                src = "img/left1.png"
            }
            update();
            break
        }
        case 38: {
            ninja.moveUp();
            if (src == "img/up1.png") {
                src = "img/up2.png"
                update();
            }
            else {
                update();
                src = "img/up1.png"
            }
            update();
            break;
        }
        case 39: {
            ninja.moveRight();
            if (src == "img/right1.png") {
                src = "img/right2.png"
                update();
            }
            else {
                update();
                src = "img/right1.png"
            }
            update();
            break;
        }
        case 40: {
            ninja.moveDown();
            if (src == "img/down1.png") {
                src = "img/down2.png"
                update();
            }
            else {
                update();
                src = "img/down1.png"
            }
            update();
            break;
        }
    }
}
function update() {
    let highscore = localStorage.setItem('highscore',scrore)
    ctx.clearRect(0, 0, 600, 700); //Cú pháp xóa đi ảnh cũ đã được vẽ trước đấy
    // obstacle.drawObstacle(ctx);
    ninja.drawn(ctx, src)
    for (let i = 0; i < arrObstacle.length; i++) {
        arrObstacle[i].drawObstacle(ctx);
    }
    vacham();
    vachamcanvas()
    ctx.font = "30px iciel Cadena";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Score :"+ scrore, 250 , 50);
    ctx.font = "30px iciel Cadena";
    ctx.fillStyle = "red";
    ctx.textAlign = "bottom !==0";
    ctx.fillText(" Best Score :"+ localStorage.getItem('highscore'), 50 , 50);
    

    // requestAnimationFrame(update);
}

for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * 700);
    let y = -Math.floor(Math.random() * 200);
    let obstacle = new Obstacle(x, y, 50, 50, 5);
    arrObstacle.push(obstacle);
}
function moveObstacle() {
    for (let i = 0; i < arrObstacle.length; i++) {
        if (arrObstacle[i].y >= 700) {
            arrObstacle[i].y = -Math.floor(Math.random() * 500);;
            arrObstacle[i].x = Math.floor(Math.random() * 360);

            if (ninja.y >= arrObstacle[i].y) {
                flag = true
                if (flag == true) {
                    scrore += 1
                }
            }
            // document.getElementById('score').value = scrore;
            // console.log(scrore)

        }
        arrObstacle[i].moveDown();
    }
    update();
    requestAnimationFrame(moveObstacle);
}

moveObstacle();
function vacham() {
    for (let i = 0; i < arrObstacle.length; i++) {
        if (Math.abs(ninja.x - arrObstacle[i].x) <= arrObstacle[i].width + 10 && Math.abs(ninja.y - arrObstacle[i].y) <= arrObstacle[i].height) {
            let answer = confirm("Bạn đã thua. Chơi lại chứ");
            arrObstacle[i].y = 0;
            arrObstacle[i].x = x = Math.floor(Math.random() * 360) ;
            if(answer == true){
                location.reload();
            } else {
                // scrore = 0
            }
        }
    }

}
function vachamcanvas() {
    if (ninja.x < 0) {
        ninja.x = 0
    }
    if (ninja.x >= canvas.width - 20) {
        ninja.x = 430
    }
    if (ninja.y < 0) {
        ninja.y = 0
    }
    if (ninja.y >= canvas.height - 50) {
        ninja.y = 520
    }
} 
