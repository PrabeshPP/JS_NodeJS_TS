function biodata(){
    // var=> Function Scope
    // let and const =>BlockScope
    let myfirstName="Prabesh";
    if(true){
        var lastName="po";
        let lastname='op';
        console.log("InnerBlock "+lastName);
        console.log("Outer Block "+lastname);
    }
    // console.log("InnerOuter Bloc"+lastname); // it will throw error ,since lastname is let variable
    
}
biodata();

//template literals(Template Strings)
let number=10000;
console.log(`${number} this is template string`);

//default parameters

function defaultParameters(a=10,b=20){
    return a+b;
}

console.log(defaultParameters());// if we don't pass arguments ,default parameters would be used

//Fat Arrow Function
const fatArrowfunct=()=>{
    let x=110;
    let y=20;
    return x*y;
}

console.log(`This is Fat Arrow function:${fatArrowfunct()}`);
