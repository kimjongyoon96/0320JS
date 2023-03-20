
// function one(number,append){
//   return number -append;
// }



// function two(number,append){
//   return number*append;
// }

// // 동적으로 만들어진 함수 ==> 인자(파라미터)를 전달받는다
// // 결과적으로는, eight란 함수는 콜백함수이다.
// // 매개변수도 변수(변할수 있는것)
// // 꼭 숫자나 문자 불리언 만 들어올 필요 없다 => 함수도 매개변수가 될수있다
// function three(number,append,callback){
// let a =number +49;
// let b =append +48;
// return callback(a,b);
// }

// console.log(three(1,2,function(a,b){
//   return a+b;
// }))

// // one의 호출값은 빼기다. 따라서, three라는 콜백함수에 3,4라는 숫자를
// // 대입한 후에, 52-52 뺴기가 된다 즉, 0이라는 값이 나온다.
// console.log(three(3,4, one));

// // two라는 함수는, 호출할때 둘의 값을 곱하는 것으로 선언하였다.
// //  따라서, 6X2는 12이기 떄문에, 값이 나온다.
// const a=two(6,2); 
// console.log(a);


function four(number,numberr){
return number/numberr
}

function five(number,numberr){
  return number*numberr
}
// number =1 , numberr =2 
function six(number,numberr,callback){
let a =number +4;
let b =numberr+4;
return callback(a,b);
}

console.log(six(1,2,function(a,b){
  return a+b;
}))

console.log(six(3,4, four));

console.log(six(25,25, four));