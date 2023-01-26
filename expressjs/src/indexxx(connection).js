const path=require("path");
const express= require('express');
const app=express();
// builtin midddle ware

// console.log(__dirname);

console.log(path.join(__dirname,"../public"));
const staticPath=path.join(__dirname,"../public");

app.use(express.static(staticPath));
app.get("/",(req,res)=>{
res.send("Hello from the express");
});

app.get("/about",(req,res)=>{
    res.send("Hello from the about express");
    });
    

app.listen(8000,()=>{
    console.log("liistening ");
});

