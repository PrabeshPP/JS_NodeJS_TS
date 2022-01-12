// function func2(){
//     setTimeout(() => {
//         console.log("Calling function 2");
        
//     }, 3000);
    

// }

// function fun1(){
//     console.log("Calling function 1");
//     func2();
//     console.log("Calling the function 1 again");
// }

// fun1();

// function Currying
function sum(num1){
    return function(num2){
        return function(num3){
            console.log(num1,num2,num3);
        }
    }

}

sum(5)(10)(50);