const h1=document.querySelector("div.hello:first-child h1");

console.dir(hello);
hello.innerText="HHeelloo";
hello.style.color="gold";

function handleTitleClick(){
    console.log(h1.style.color);
    h1.getElementsByClassName.color="purple";
    console.log(h1.style.color);
}

function handleMouseEnter(){
    h1.innerText="Mouse is here";
}

h1.addEventListener("click",handleTitleClick);

