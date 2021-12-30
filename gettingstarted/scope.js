function biodata(){
    var myFirstName="Rocky";
    // var=> Function Scope
    // let and const =>BlockScope
    let myfirstName="Prabesh";
    if(true){
        var lastName="po";
        let lastname='op';
        console.log("InnerBlock "+lastName);
        console.log("Outer Block "+lastname);
    }
    // console.log("InnerOuter Bloc"+lastname); // it will throw error ,since lastname is let variable
    
}
biodata();
