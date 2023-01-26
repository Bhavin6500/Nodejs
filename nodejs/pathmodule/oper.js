const add=(a,b)=>{
return a+b;
};
const sub=(a,b)=>{
    return a-b;
}


const mult=(a,b)=>{
    return a*b;
}
// const name="Bhavin"
// module.exports=add;         if we have only one function then we can use like this way

// module.exports.add=add;
// module.exports.sub=sub;


// for mulitiple function in other way
module.exports={add,sub,mult};