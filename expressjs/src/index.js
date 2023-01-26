const path=require('path');

const express=require("express");
const app=express();
const port=8000;
const hbs=require('hbs');



const staticPath=path.join(__dirname,"../public");
// const templatePath=path.join(__dirname,"../templates");

const templatePath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");
app.set("view engine",'hbs');
// to uuse the partial


hbs.registerPartials(partialsPath);
// if we wnat to chnage the name of views to template themnn we have to give path
app.set("views",templatePath);
// to set the view engin
// if we use pug then inplace of hbs we have to write pug 


console.log(path.join(__dirname,"/templates/views"));

// template engine root
    app.get("/",(req,res)=>{
        res.render('index',{
            placeholder:"Bhavin"
        });
    });

app.get("/about",(req,res)=>{
    res.render('about');
});
app.get("/profile",(req,res)=>{
    res.render('profile');
});
app.get("/contact",(req,res)=>{
    res.render('contact');
});

app.get('*',(req,res)=>{
    res.render('404',{
        errorcomment: "opps page could not found"
    });

});

// app.use(express.static(staticPath));

// app.get("/",(req,res)=>{
//     res.send("hello from the express sevrveer using res.send from index.js")
// })


app.listen(port,()=>{
console.log(`listening to the port ${port}`)
});