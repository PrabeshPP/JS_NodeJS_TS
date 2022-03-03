let arr=["p","r","a","b","e","s","h"];

// For Loop
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//For in Loop
//it returns the index if an array
for(let x in arr){
    console.log(x);
}

//For of Loop
//it returns the elemnts of an array
for(let x of arr){
    console.log(x);
}

//For each Loop
arr.forEach((elements,index,array)=>console.log(elements));

//searching and filter
console.log(arr.indexOf('r',1));

//CURD in Array


//push method
// addd the element at the last of an array
arr.push('hello');
console.log(arr);


//unShift method
//adds the element at the first of an array
arr.unshift("prabesh");
console.log(arr);


//Removing the element
//PoP method returns the last element of an array
arr.pop();
console.log(arr);

//shift() method
//removes the last element of ann array
arr.shift();
console.log(arr);



