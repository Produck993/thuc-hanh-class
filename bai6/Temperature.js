//[Bài tập] Xây dựng lớp mô tả Temperature

class Temperature{
    constructor(C){
        this.C = C;
    }

getCtoK(){
    return this.C + 273,15
}

getCtoF(){
    return 9,5 *this.C +32 
}
}

let nhietdo = new Temperature(25)

document.write("Nhiệt độ C sang F "+nhietdo.getCtoF() + "<br>")
document.write("Nhiệt độ C sang K "+ nhietdo.getCtoK())
