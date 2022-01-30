export{}

const user={
    firstName:"Prabesh",
    lastName:"Bista"
}

function HelloUser(person:Person){
    console.log(person.firstName);
    console.log(person.lastName);
}

interface Person{
    firstName:String,
    lastName:String
}

HelloUser(user);

