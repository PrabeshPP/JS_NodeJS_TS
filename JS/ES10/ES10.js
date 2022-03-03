// using spread operator in objects

const person1={
    myName:"Prabesh Bista",
    height:171

};

const newPerson={...person1};

console.log(person1);
console.log(newPerson);

// flattening the array

let arr1=[
    [1,2,4,5],
    [6,7,8,9],
    [10,11,12,13],
    [14,[15,16,17]]
]

console.log(arr1.flat(2));

//to Object
let arr=[['name','Prabesh'],['age',89]];
let obj=Object.fromEntries(arr);
console.log(obj);

//trimStart() & trimEnd()

let myName="     PrabeshBista     ";
let firstTrimmedName=myName.trimStart();
console.log(firstTrimmedName);
let lastTrimmedName=myName.trimEnd();
console.log(lastTrimmedName);
console.log(myName.trim());
