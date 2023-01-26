const http=require('http');
const fs=require('fs');
var requests= require('requests');
const homeFile=fs.readFileSync("home.html",'utf-8');
const server=http.createServer((req,res)=>{
   
    requests('http://api.openweathermap.org/geo/1.0/direct?q=Jetpur&appid=7f3e67361a24fbcfb5418e94879f41ef')
    .on('data', (chunk)=> {
      console.log(chunk)
    })
    .on('end',(err) =>{
      if (err) return console.log('connection closed due to errors', err);
     
      console.log('end');
    });


})
server.listen(8000,'127.0.0.1');