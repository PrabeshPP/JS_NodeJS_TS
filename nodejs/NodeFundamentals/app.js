//EventEmitter

const EventEmitter=require("events");
const customEmitter=new EventEmitter();

customEmitter.on('response',(name,age)=>{
    console.log(`data received from ${name} ${age}`)
});

customEmitter.on('response',()=>{
    console.log("My name is Prabesh Bista!")
})

customEmitter.emit('response','Prabesh',20)