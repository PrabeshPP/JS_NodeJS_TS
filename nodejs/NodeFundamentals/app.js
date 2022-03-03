//

const names=require('./1-module');
const Hello=require('./2-module');
const data=require('./3-alternative');



Hello(names.Prabesh);
Hello(names.Carlo);

let items=data.items;

for(const item of items){
    console.log(item);
}


console.log(data.singlePerson.name);