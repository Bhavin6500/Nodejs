const fs=require('fs');
const boidata = {
    name:'raj',
    age:23,
    last : 'rajan',
    city:'jetpur',
    country:'canada',
}

const json=JSON.stringify(boidata);
// console.log(json)
// const objdata=JSON.parse(json);
// console.log(objdata)

fs.writeFile('json1.json',json,(err)=>{
    console.log("done")
})

fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data)
    
})