// to create our own server, we require http ,createserver and listener

const http=require('http');
const fs=require('fs');
const { type } = require('os');
const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=='/'){res.end('WE are responding to the home page server')}
    else if(req.url=='/contact'){res.end('contact page')}
    else if(req.url=='/about'){res.end('about page')}

    else if(req.url=='/userapi')
    {
        // res.end("hello from user api")
    // in synchronous file data reads online once
    fs.readFile(`${__dirname}/jsonapi/jsonapi.json`,"utf-8",(err,data)=>{
        console.log(data)
        res.writeHead(200,{'content-type':'application/json'})
        res.end(data)
    })
    
    }
    
    
    else{res.writeHead(404,{'Content-type':'text/html'})
        res.end('<h1>404 error</h1>')}
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("listening to the port")
});
// server.listen(8000,'127.0.0.1');
