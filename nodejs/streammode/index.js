const fs=require('fs');
const http=require('http');
// const server=http.createServer();
// server.on("request",(req,res)=>{
//     var fs = require('fs');                          this is not a streaming method
//     fs.readFile('input.txt',(err,data)=>{
//         if(err) return console.error(err);
//         res.end(data.toString());
//     });
// });

// this is streaming method
// server.on("request",(req,res)=>{
//     const rstream=fs.createReadStream("input.txt");
//     rstream.on('data',(chunkdata)=>{
//         res.write(chunkdata);

//     })
//     rstream.on('end',()=>{
//         res.end();
//     })
//     rstream.on('error',(err)=>{
//         console.log(err);
//         res.end("file not exists");
//     })

// });



//  3 way

const server=http.createServer();
server.on('request',(req,res)=>{
    const rstream=fs.createReadStream("input.txt");
    rstream.pipe(res);
    
});
server.listen(8000,'127.0.0.1');