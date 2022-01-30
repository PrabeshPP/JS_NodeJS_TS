var Person = /** @class */ (function () {
    function Person(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    return Person;
}());
//if  the objects of the class matches all the varible of the class varibale type ,it will not show any error
var prabesh = new Person("Prabesh Bista", 20, "White");
console.log(prabesh.name);
