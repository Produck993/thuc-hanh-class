let hcn = new Hinhchunhat()

hcn.chieucao = 10
hcn.chieurong = 5
alert("Chu vi: " + hcn.getchuvi())
alert("Diện tích : " + hcn.getdientich())


let rectangle1 = new Rectangle(10, 20);
rectangle1.w = 5; // gọi set    
rectangle1.height = rectangle1.w //gọi get
alert('Chu vi: ' + rectangle1.getPerimeter());
alert('Dien tich: ' + rectangle1.getArea());