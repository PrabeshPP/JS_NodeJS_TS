 
 
/*
Primitive Type
-String
-Number
-Boolean
-undefined
-null
*/


let number=300; //Number literal
let istrue=false; //Boolean Literal
let firstName; //undefined literal
let lastName=null; //null literal

/*
reference
Object,
Arrays,
Functions
*/
let person={
    name:"Mosh",
    age:30

};
person.name="IronMan";
//Bracket notation
let selection='name';
person[selection]="Marry";
console.log(person);

// Note* triple === would also check the type
