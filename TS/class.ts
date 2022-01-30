export {}

class Person{
    name:String;
    age:number;
    color:String;

    constructor(name:String,age:number,color:String){
        this.name=name;
        this.age=age;
        this.color=color;
    }
}
//if  the objects of the class matches all the varible of the class varibale type ,it will not show any error
const prabesh=new Person("Prabesh Bista",20,"White");
console.log(prabesh.name);
