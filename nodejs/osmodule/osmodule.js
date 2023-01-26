const os=require('os');
console.log(os.arch())

console.log(os.freemem())
console.log(os.networkInterfaces())

const free=os.freemem()
console.log(`${os.totalmem()/1024/1024/1024}`)


console.log(os.hostname())
console.log(os.homedir())
console.log(os.loadavg())
console.log(os.networkInterfaces())
console.log(os.platform())
console.log(os.cpus())
console.log(os.release())
console.log(os.type())