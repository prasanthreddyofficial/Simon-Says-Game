let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["red","purple","green","blue"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false)
        {
            console.log("game started");
            started=true;
            levelup();
        }
});
function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}
function levelup(){
    userseq=[];
level++;
h2.innerText=`Level ${level}`;
let rand=Math.floor(Math.random()*3);
let randcolor=btns[rand];
let randbtn=document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);
console.log(gameseq);
btnFlash(randbtn);
}
function btnpress(){
let btn=this;
btnFlash(btn);
usercolor=btn.getAttribute("id");
console.log(usercolor);
userseq.push(usercolor);
check(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}
function check(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length===gameseq.length){
            setTimeout(levelup,1000);
        }
        console.log("same value");
    }
    else{
        h2.innerHTML=`Game over! Your Score was <b>${level}</b> <br>Press Any Key To start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}