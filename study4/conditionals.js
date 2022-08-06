/* 예제
const age = prompt("How old are you?"); //화면에 프롬프트 띄운다.

console.log(age);
console.log(typeof age); //입력받은것이 어떤 타입인지 알려준다.
//데이터 타입 형변환
// parseInt(); Int형으로 변환해주는 함수

console.log(typeof "15", typeof parseInt("15"));
console.log(age,parseInt(age)); //왼쪽은 문자열 타입 오른쪽은 정수형 타입으로 변환된 15.
*/

//활용
const age = parseInt(prompt("How old are you?"));
//첫번째실행하게될 문장은 prompt("How old are you?")
//두번째로 실행하게될 문장은 parseInt(첫번째에서 실행된 값)
console.log(age);
//프롬프트에서 정수를 입력시 정수를 받아오고 문자를 입력하게 되면 NaN이 출력된다.

//isNaN 함수는 하나의 인자를 줄시 숫자인지 아닌지 판별해준다. ->boolean을 반화한다.
console.log(isNaN(age)); //문자를 받으면 true 이외의 것을 받으면 false


if(isNaN(age)||age<0){
alert("입력하신 내용은 일치하지 않습니다.");
}
else if(age<18){
alert("입력하신 나이가 이용하기 부적절합니다.");
}
else if(age>=18&&age<=50){ // age>=18||age<=50
    alert("나이 입력 성공. 이용가능합니다.");
}
else if(age>50&&age<=80){ 
    alert("아무래도 운동을 좀 하셔야 겠군요.");
}
else if(age>80){ 
    alert("얼마든지 이용가능합니다.");
}
else{
    alert("입력하신 내용은 일치하지 않습니다.");
}



