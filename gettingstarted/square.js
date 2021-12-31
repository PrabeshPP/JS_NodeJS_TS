let numArr=[2,3,4,5,6];

let newArr=numArr.map((currentElem,index,arr)=>{
    return currentElem>9;

})
console.log(numArr);
console.log(newArr);
