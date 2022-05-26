// [Bài tập] Xây dựng lớp mô tả hình chữ nhật

class Rectangel{
    constructor(x,y,a,b,C,S) {
        this.x = x
        this.y = y
        this.a = a;
        this.b = b;
        this.C = C;;
        this.S = S
    }
    getchuvi() {
        return (this.a+this.b)*2;
    }
    getdientich() {
        return this.a*this.b;
    }

    getRandomhex() {
        return Math.floor(Math.random()*255);
    }
    getrgb() {
        let red1 = this.getRandomhex();
        let green1 = this.getRandomhex();
        let blue1 = this.getRandomhex();
        return "rgb(" + red1 + ','+ green1 +',' + blue1 + ")"
    }
}