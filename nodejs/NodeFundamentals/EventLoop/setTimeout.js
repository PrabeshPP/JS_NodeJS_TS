//
console.log("I was off-loaded from the stack");

setTimeout(()=>{
    console.log("this function has been off-loaded from the queue!")
},5000);

console.log("I was off-loaded from the stack!")