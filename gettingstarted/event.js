// There are 4 ways of writing Events in JavaScript
//Mouse Event in JavaScript
//KeyboardEvent in JavaScript
//InputEvents in JavaScript

function Alert(){
    // also I am using escape characters \"you data"\
    alert("This is the most \"easiest\" way of calling the function.");
}
// another way of writing the function
const thirdway=document.getElementsByClassName("third");
thirdway[0].onclick=function(){
    alert("My name is prabesh bista");
}



//4th way of writing the  function
const fourthWay=document.querySelector("#fourth");
fourthWay.onclick=()=>{
    alert("This is the fourt way of writing the function");
}

