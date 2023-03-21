const stringExample ="참깨빵 위에 순쇠고기 패티 두 장 특별한 소스 양상추 치즈 피클 양파까지"
// 1. 문자열을 가위질 하라는 함수이다.
function splitString(stringParams){
  let result=stringParams.split('');
  return result;
}
// 2. 문자열을 합치겠다는 함수같다.
// 3. foreach는 배열을 순회하는 함수이다.
// 4. 앞에 선언해준 stringExample에 여기는 바디선언을 더해준다
function appendString(stringArray,callback){
  let body="여기는 바디선언";
  stringArray.forEach(function(element){
    body =body+element;
  });
  callback(body);
};
// 5. 바디템플렛을 선언해준고
// 6. 여기는 바디선언(위에 appendstring)을 더해주고,
// 7. 더하기 연산자, 참깨빵 위에 순쇠고기 패티 까지 
// 8. 
let bodyTemplate = `여기는 바디템플렛`;
let resultCase =appendString(splitString(stringExample), function(body){
  // console.log(body);
  bodyTemplate +=body.substring(0,body.indexOf("티")+1);
  console.log(bodyTemplate);
});
function elementMaker(string){
  return `<div>${string}</div>`;
}
console.log(elementMaker(bodyTemplate));