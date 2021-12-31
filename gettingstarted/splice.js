//splice is used to delte and update an array
//
let arr=["jan","feb","march"];
arr.splice(3,0,"april");
arr.splice(4,0,"may");
console.log(arr);

//updating an array using splice method

const updateMonth=arr.splice(1,1,"Feb");
console.log(arr);
console.log(updateMonth);