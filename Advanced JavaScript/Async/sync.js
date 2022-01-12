function func2(){
    setTimeout(() => {
        console.log("Calling function 2");
        
    }, 3000);
    

}

function fun1(){
    console.log("Calling function 1");
    func2();
    console.log("Calling the function 1 again");
}

fun1();