//Array destructure
const myBioData=["prabesh","bista",19];
let [fName,lName,age,myDegree="A-Levels"]=myBioData;;
console.log(myDegree);


// destructuring the object

const myBioData1={
    myName1:"Prabesh Bista",
    age1:20,

}

let{myName1,age1}=myBioData1;

console.log(myName1);
console.log(age1);