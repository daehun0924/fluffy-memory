const mon ="mon";
const tue ="tue";
const wed ="wed";
const thu="thu";
const fri="fri";
//배열 생성 ~ 0번지 부터 생성시작
const day = [mon, tue, wed, thu, fri];
const nonsense =[1,2,"hello",false,null,true,undefined];
const characters = ["iron man","spider-man","superman","batman",];

//배열 출력
console.log(day);
console.log(nonsense);
console.log(characters);
//배열의 아이템 가져오기 
console.log(characters[2]); //배열 [2]번지에 있는 값을 가져온다.
//배열안에 아이템 추가하기
characters.push("thor") //배열의 가장끝에 추가.
console.log(characters);

console.log(" ");

// object
const player = {
    name: "Mr.K",
    HP: 100,
    Attack: 90,
    Skill: "wind blade",
};
console.log(player);
console.log(player.name);
console.log(player.HP);
console.log(player.Attack);
console.log(player.Skill);

console.log(" ");
console.log(player["name"]);// = console.log(player.name); 같은 역할
console.log(" ");
//중요! 객체를 선언시 const라고 선언했지만 
// 객체안의 무언가를 수정할때 const있더라도 상관 없이 변경 가능하다.
//단, 객체 그 자체를 변경 하려할시엔 에러 발생
player.HP=65;
console.log(player.HP);

//객체에 정보를 추가할 한다.
console.log(" ");
player.mankind="inhuman";
console.log(player);

//활용
console.log(" ");
player.shield=85;


console.log(" ");
player.battlestatus=(player.HP+player.Attack+player.shield)/3;
console.log(player.battlestatus);
console.log(player);
