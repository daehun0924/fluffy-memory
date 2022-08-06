//function
function sayHello(){
    console.log("hello!");
}

sayHello();

console.log(" ");
 //함수에 인자 전달 및 작동
function introduce(nameOfperson,IdOfperson,age){
    console.log("이름은 "+nameOfperson);
    console.log("주민번호는 "+IdOfperson)
    console.log("나이는 "+age);

    console.log("이 사람의 정보는 "+nameOfperson+" / "+IdOfperson+" / "+age);
}

introduce("Mr.k",990924,24); //<- 함수호출및 인자 전달하고 작동수행
//만일 introduce("Mr.k"); / introduce(20134); ... 이런식으로 작성하면
//함수는 3번 작동하고 출력되어진다.
console.log(" ");

introduce("Ms.Lee",970321,26);

console.log(" ");

function plus(firstNumber,secondNumber){
    console.log("덧셈은 "+firstNumber+secondNumber);
    console.log("뺄셈은 "+firstNumber-secondNumber);
    console.log("곱셈은 "+firstNumber*secondNumber);
    console.log("나눗셈은 "+firstNumber/secondNumber);
    
}

//console.log(firstNumber); 에러!! 왜냐면 firstNumber인자는 함수 밖에서 존재하지 않기 때문!

function print(firstNumber){ // 근데 이건 가능해 왜?
console.log(firstNumber) //왜냐면 여기서의 firstNumber은 print함수의 인자이기 때문.
}

plus(8,60);
print(276387236487648723)
//------------------------------------------------------
console.log(" ");
console.log("플레이어 객체를 만들어보자");
const player1 = {
name: "Mr.hit",
sayHello: function(){
    console.log("Hello@@@");
},
};

console.log(player1.name);
player1.sayHello(); //객체에 담겨있는 함수를 사용 할수있다.

