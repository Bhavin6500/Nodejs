const Event=require('events');
const event=new Event()

event.on('hello',(sc,msg)=>{
    console.log(`page is working properly ${sc} and ${msg}`)
})

event.emit("hello",200,'ok');