import fs from 'fs';

let name ="kimjongyoon";
let year = "2023";
let month = "03";
let day = "20";

let fileName= year +month +day+ "-" +name;


// 쓰다 파일을 동기방식으로
// 파일 불러올거야, 변수로 만들거야(이름으로)
fs.writeFileSync("./"+fileName+ ".txt",name);