//Event propagation mode determines in which order the elements receive the event.
// There are three types of Event Propagation
// 1.Capture Phase 2.Bubbling Phase 3.Target Phase

// Target Phase
 let parentDiv=document.getElementsByClassName("parent");

 parentDiv[0].addEventListener('click',()=>{
     alert("You clicked Parent Widget!")
     
 })
 
 let childDiv=document.getElementsByClassName('child');

 childDiv[0].addEventListener('click',(event)=>{
     alert("You clicked Child Widget!");
     event.stopPropagation()
 })

 //In Capture Phase ,we should pass the third element in addEventListener as true;
 //In Bubbling Phase,we should pass the thirs elemet in addEventListener as false;