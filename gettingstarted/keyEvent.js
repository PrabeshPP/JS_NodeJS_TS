const keyPress=document.getElementById('keys');
function keypress(event){
    return keyPress.innerHTML=`${event.key} ${event.code}`;
}

function keyUP(){
    return keyPress.innerHTML="Key is Up";

}
function keyDown(){
    return keyPress.innerHTML="Key is down";

}