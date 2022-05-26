function hinhchunhat() {
    let hcn = new Rectangel()
    hcn.a = Math.floor(Math.random()*50);
    hcn.b = Math.floor(Math.random()*50);
    hcn.x = Math.random() * window.innerHeight;
    hcn.y= Math.random() * window.innerWidth;
    console.log("Chu vi hình chữ nhật vữa lãy :" + hcn.getchuvi());
    console.log("Diện tích hình chữ nhật vữa lãy :" + hcn.getdientich());

    let ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.rect(hcn.x,hcn.y,hcn.a,hcn.b,)
    ctx.fillStyle = hcn.getrgb();
    ctx.fill();
}