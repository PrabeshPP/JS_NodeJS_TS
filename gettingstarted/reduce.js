//We use reduce method to flatten the array,eg. from 3 dimensional array yo 2 dimensional
let arr3=[1,2,3,7,4,5,6];
// Four arguments are required

//Accumulator
//Current Value
//Current Index
//Source Array
let sum=arr3.map((currentElem)=>currentElem*2)
.filter((currentElem)=>currentElem>10)
.reduce((accumulator,currentElem1)=>
{ 
    return accumulator+=currentElem1;
}
);

console.log(sum);

