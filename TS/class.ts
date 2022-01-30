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

const prabesh=new Person("Prabesh Bista",20,"White");
console.log(prabesh.name);
