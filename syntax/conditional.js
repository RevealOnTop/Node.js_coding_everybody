// 입력한 값을 보여주는 메소드. 

var args = process.argv;

// nodejs 는 들어오는 값을 3번째부터 입력한 값으로 보여줌.
console.log(args[2]);
console.log('A');
console.log('B');


if(args[2] === '1'){
console.log('C1');
}else{
console.log('C2');
}
console.log('D');

