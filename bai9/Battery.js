//[Thực hành] Xây dựng lớp mô phỏng sự hoạt động của đèn pin

class Batery {
    constructor(energy){
        this.energy = energy
    }
getdecreaseEnergy() {
    if(Batery.energy > 0){
        this.energy--;
    }
}
}