
// function with no return
function greet(firstName,lastName){
    console.log("I am inside a function");
    console.log("Hello "+firstName+lastName);
}

//function that calcuates a value
function Square(number){
    return number*number;
}

greet("Prabesh","Bista");

let number=Square(5);
console.log(number);