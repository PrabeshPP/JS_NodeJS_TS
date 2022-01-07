//The window object allows execution of code at specified time intervals
//These time intervals are called timing events
//There are two keys methods to use with JavaScript are:
//setTimeOut();
//setInterval();

const showMyName=document.getElementsByClassName("showMyName");
const button=document.getElementsByClassName("button");

button[0].addEventListener('click',()=>{
setTimeout(()=>{
showMyName[0].innerHTML="My name is Prabesh Bista";
showMyName[0].getElementsByClassName.color="teal";
},1000);
});