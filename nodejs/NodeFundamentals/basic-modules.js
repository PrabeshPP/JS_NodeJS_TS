//

const names=require('./1-module');
const Hello=require('./2-module');
const data=require('./3-alternative');

//!Even without exporting the module,we will be able to call the addValues() function

require('./7-mind-grenade');



// Hello(names.Prabesh);
// Hello(names.Carlo);

// let items=data.items;

// for(const item of items){
//     console.log(item);
// }


// console.log(data.singlePerson.name);