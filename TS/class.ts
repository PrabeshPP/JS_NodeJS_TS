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

//abstract class

abstract class Base{
    abstract getName():String;

    printName(){
        console.log("My Name is "+this.getName());
    }

}

class child extends Base{
    getName(): String {
        return "Prabesh Bista";
    }

}

const d=new child();
d.printName();
