//콘솔애 document 입력시 작성한 html내용을 읽어올수있다.
//document는 브라우저에 이미 존재하는 object이다. 그 객체는 접근할수있는 html을 가리킨다.
//document가 html을 보여준다 -> 자바스크립트의 관점으로 보여준다.
//콘솔에 document.title 입력시 자바스크립트는 html에 접근하고 읽을수있게 설정되어있음을 보여주는 결과가 나온다

//js를 이용하여 html객체를 통해 html을 변경할수있게 되며 상호작용할수있음을 알게되었다.

document.title = "Hellp From Js";
const title=document.getElementById("title");
//getElementById함수를 통해 id를 사용해서 html요소(element)를 가져와라 라는 뜻으로 해석 가능

console.log(title);
console.dir(title);

title.innerText="got you";

console.log(title.id);
console.log(title.className);

//js파일에서 html 요소를 가지고 올수있고 변경할수있다.


const helos = document.getElementsByClassName("hello");
console.log(helos);
//

const helod = document.getElementsByTagName("h1");
console.log(helod);


const helloa = document.querySelector(".hello h1"); //h1이 속한 태그를 찾고 그걸 반환(?)
//querySelector은 element를 CSS방식으로 검색할수있다!
// html의 클래스 이름 및 태그를 갖고 오기 위해서 사용

console.dir(helloa);
//요소의내부를 보고싶을시 사용
helloa.innerText="HHeelloo";
helloa.style.color="gold";
//h1.addEventListener("click", handleHelloaClick);
//addEventListener는 이벤트를 리슨 하는것. 그리고 뒤에 머할지도 정해준다.
function handleHelloaClick(){
    console.log("helloa was click!");
    helloa.style.color="red";
    helloa.innerText ="mouse was clicked";
}

//정리하자면 helloa이라는 html element가 하나 있다고 가정하고
//addEventListener를 호출하고 listen하고 싶은 event이름을 알려준다
//그리고 event가 발생하게 되면 호출할 function을 전달해준다.
//->유저가 클릭하면 js가 실행버튼을 대신 눌러주는 식으로
helloa.addEventListener("click",handleHelloaClick);
helloa.addEventListener("mouseenter",handleMouseEnter);
helloa.addEventListener("mouseleave",handleMouseLeave);

function handleMouseEnter(){
    console.log(helloa.style.color);
    helloa.style.color="brown";
    //console.log("mouse is here");
    helloa.innerText="mouse is here";
}

function handleMouseLeave(){
   // console.log("mouse is leave");
    helloa.innerText="mouse is leave";
}

//h1.onclick=handleHelloaClick;
// h1.addEventListener("click", handleHelloaClick); 똑같다

window.addEventListener("resize",handleWindowResize);
//화면 사이즈 조정시 실행
function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}

window.addEventListener("copy",handleWindowCopy);
//복사 하려고 할시 실행
function handleWindowCopy(){
    alert("don't do that!");
}

window.addEventListener("offline",handleWindowOFFline);

function handleWindowOFFline(){
alert("SOS no wifi");
}

window.addEventListener("online",handleWindowONline);

function handleWindowONline(){
alert("ALL GOOOOD");
}


