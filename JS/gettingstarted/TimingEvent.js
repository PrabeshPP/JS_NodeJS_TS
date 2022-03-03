//The window object allows execution of code at specified time intervals
//These time intervals are called timing events
//There are two keys methods to use with JavaScript are:
//setTimeOut();
//setInterval();

const showMyName=document.getElementsByClassName("showMyName");
const button=document.getElementsByClassName("button");
const button1=document.getElementsByClassName("button1");



button[0].addEventListener('click',()=>{
    setTimeout(()=>{
        showMyName[0].innerHTML="My name is Prabesh Bista";
        },3000);
});

const start=document.getElementsByClassName("start");
const stop=document.getElementsByClassName("stop");
const heading=document.getElementsByClassName("timer");
let timeRef;

start[0].addEventListener('click',()=>{
    let x=0;
    timeRef=setInterval(() => {
        
        heading[0].innerHTML=`${x}`;
        ++x;
        
    }, 1000);
});
stop[0].addEventListener('click',()=>{
    clearInterval(timeRef);
})

