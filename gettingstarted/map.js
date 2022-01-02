// let arr=[25,36,49,64,81];
// let newArr=arr.map((currentElem,index,arr)=>{
//    return Math.sqrt(currentElem);

// });

// console.log(newArr);

//Chain Method in Map

let arr1=[2,3,4,6,8];

let newArr1=arr1.map((currentElem,index,arr)=>{
    return currentElem*2

}).filter((currentElem)=>{
    return currentElem>10;
});

console.log(newArr1)