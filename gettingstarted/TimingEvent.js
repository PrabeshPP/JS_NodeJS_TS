//The window object allows execution of code at specified time intervals
//These time intervals are called timing events
//There are two keys methods to use with JavaScript are:
//setTimeOut();
//setInterval();

const showMyName=document.getElementsByClassName("showMyName");
const button=document.getElementsByClassName("button");
const MyTimeOut=setTimeout(()=>{
    showMyName[0].innerHTML="My name is Prabesh Bista";
    showMyName[0].getElementsByClassName.color="teal";
    },3000);

button[0].addEventListener('click',()=>{
MyTimeOut
});

button[1].addEventListener('click',()=>{
    clearTimeout(MyTimeOut);
})