//String padding

let message="Hello,My name is Prabesh Bista";
console.log(message);
console.log(message.padStart(message.length+8));
message.padEnd(message.length+10);

// Object.value()
//Object.entries()

const person={
    name:"Prabesh Bista",
    age:200
};

// It gives the values of the object in JavaScript.
console.log(Object.values(person));

//It gives the key of the object in JavaScript
 console.log(Object.keys(person));

//It returns the keys and values of the object in a seprate array in JavaScript
console.log(Object.entries(person));


// using spread operator in objects

const person1={
    myName:"Prabesh Bista",
    height:171

};

const newPerson={...person1};

console.log(person1);
console.log(newPerson);