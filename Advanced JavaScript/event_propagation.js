//Event propagation mode determines in which order the elements receive the event.
 let parentDiv=document.getElementsByClassName("parent");

 parentDiv[0].addEventListener('click',()=>{
     alert("You clicked Parent Widget!");
 })
 
 let childDiv=document.getElementsByClassName('child');

 childDiv[0].addEventListener('click',()=>{
     alert("You clicked Child Widget!");
 })