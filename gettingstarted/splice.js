//splice is used to delte and update an array
//
let arr=["jan","feb","march"];
arr.splice(3,0,"april");
arr.splice(4,0,"may");
console.log(arr);


const indexOfMonth=arr.indexOf("march") //dynamically checks the index for an element march//

//updating an array using splice method

const updateMonth=arr.splice(indexOfMonth,1,"March");
console.log(arr);
console.log(updateMonth);