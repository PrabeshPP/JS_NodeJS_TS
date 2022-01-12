// Call-Back Functions

function add(a,b){
    return a+b
};

function sub(a,b){
    return a-b;
}

function mult(a,b){
    return a*b;
}

function div(a,b){
    return b/a;
}
// Higher-Order Function
function Calculator(a,b,operator){
    return operator(a,b);
}

let finalValue=Calculator(10,2,add);

console.log(finalValue);

