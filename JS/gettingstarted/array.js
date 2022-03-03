//An Array is dynamic
// An array is an object


let selectionColors=['Red','Blue'];
console.log(selectionColors[1]);
selectionColors[2]='gray';
console.log(selectionColors);
selectionColors[3]=100;
console.log(selectionColors);

let arrayIndex=[99,1,7,37,34,60];
//sorting the array
console.log(arrayIndex.sort());
//Slicing the array
console.log(arrayIndex.slice(1,4));
//Splice delete the for a given index from to;
console.log(arrayIndex.splice(1,3));
console.log(arrayIndex);

