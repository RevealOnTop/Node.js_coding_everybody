var fs = require('fs');
 
/* 출력은 A , B , C 순서로 나오게 됨.

Sync가 있으면 동기적인 방식으로 처리 하는 것.
//readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/
 
/*Sync가 없으면 비동기적인 방식으로 처리 하는 것. */ 
/* 출력은 A, C , B 순서로 나오게 됨 */
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');