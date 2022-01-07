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

// It gives the values of the object.
console.log(Object.values(person));

//It gives the key of the object
console.log(Object.entries(person));
