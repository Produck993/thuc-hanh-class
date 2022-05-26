let phone1 = document.getElementById('phone1').value ;
let phone2 = document.getElementById('phone2').value ;

let iphone = new Phone(true,50,[],[],[])
iphone.getTextMess('Hello')
let samsung = new Phone(true,67,[],[],[])
iphone.sentmessage(samsung)

document.write(`Hộp thư nháp của iphone sau khi gửi: ${iphone.draft}<br>`)