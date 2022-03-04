const os=require('os');
//Info about current user
console.log(os.userInfo().username);

//methods returns the system uptime in seconds

console.log(`The system is ${os.uptime()} seconds`);


//

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),

}


console.log(currentOS);


