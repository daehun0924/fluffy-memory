console.log('hello javascript');
//자바스크립트에서 console.log() 를 활용하면,
//원하는 내용을 브라우저의 콘솔 탭에 출력할 수 있다는 것을 배웠습니다.

//console.log(15,15);
/*
let coffeePrice = 4500;
let snadwichPrice = 6500;
let prapePrice = 5500;

console.log(coffeePrice+snadwichPrice);
console.log(prapePrice*3);
console.log(coffeePrice*2+prapePrice*4);
*/
alert("hi");
//console.log명령어는 콘솔에 로그 또는 print 역할을 한다.
console.log("hello");
console.log(5+2);

/*JS variable
상수: const a =5; - 값 바꿀 수 없다.
let b = 3; - 새로운 값을 생성/업데이트 할때 사용하는것
문자: const myName ="Kim";
*/
const a = 5;
let b = 3;
const myName ="Kim";
let age =20;
//과거 JS 변수는 var이 있었다 var는 어디서든 업데이트가 가능
var myheight =178.9;

console.log(a*2);
console.log("hello "+myName);
console.log("your age is "+age);
console.log("your height is "+myheight);

age=25 
myheight=179;
//age 값 업데이트, 기존에 변수 선언시 let으로 지정했기 때문
//var은 let과 같다고 보면 된다?
console.log("your age is now "+age);
console.log("your height is now "+myheight);
