// 실행하는 파일의 위치의 경로에서 어디를 읽는지 적어주어야 한다.
var testFolder = '../data';
var fs = require('fs');
 
fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})