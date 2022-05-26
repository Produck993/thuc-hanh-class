//[Thực hành] Chu vi diện tích hình chữ nhật

class Hinhchunhat{
    chieurong;
    chieucao;
    constructor () {

    }

getchieucao() {
     return this.chieucao
}
setchieucao() {
    this.chieucao = chieucao
}

getchieurong() {
    return this.chieurong
}
setchieurong() {
    this.chieurong = chieurong
}

getchuvi() {
    return (this.chieucao + this.chieurong)*2
}
getdientich() {
    return (this.chieucao * this.chieurong)
}
}