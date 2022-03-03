// prefix increment ,post increment
let x=0;
console.log(++x); //prefix increment
console.log(x++); //postfix increment

//comparison operators
// >,<,>=,<=,==,!=

let num1=22;
let num2=44;
//less than operator
console.log(num1<num2);

//greater than operator

console.log(num2>num1);

// greater than or equal to operator

console.log(num2>=num1);

//less than or equal to

console.log(num1<=num2);

//equal to operator

console.log(num1==num2);

//not equal to operator

console.log(num1!=num2);

//Logical Operator 
 
// And Operator
// inorder to be valid in && operator ,both expression should return true
console.log("Yo,I am AND operator");
console.log(num1<num2 && num2!=num1);

//OR Operator
// inorder to be valid in || operator,at least one expression should return true
console.log("Yo,I am OR Operator");
console.log(num1<num2 ||nu1>=num2); //it should return true,since one expression it true

//Logical NOT Operator
// it will return oposite of the expression result
console.log("Yo,I am a not operator");
console.log(!(num1<num2 ||nu1>=num2));

//String Operator

let sentence="Hello,My name is prabesh bista.I am tikapur kailali.";
// this will split the string wheneve it encounters space.
console.log(sentence.split(' '));
// using the + symbol would concatenate the two string
console.log(sentence+"This is added String");
//It check whether the first word is same as the one we gave
console.log(sentence.startsWith("Hello","Hello"));


//Output of 2**2
//** operator returns the square of 2
console.log(2**2);






