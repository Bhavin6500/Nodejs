const express= require('express');
const app=express();
const port=3000;

console.log(__dirname);
//builtin middle ware
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("welcomee to home page");
})

app.get("/about",(req,res)=>{
    res.status(200).send("welcomee to about page");
})


app.get("/contact",(req,res)=>{
    res.send("welcomee to contact page");
})


// for serving json daata there are two aways both are mentionde above
// app.get("/temp",(req,res)=>{
//     res.send({
//         id:1,
//         name:"Bhavin",
//     });
// })


app.get("/temp",(req,res)=>{
    res.json({
        id:1,
        name:"Bhavin",
    });
})


app.listen(port,()=>{
    console.log(`listening to the port number ${port}`)
});