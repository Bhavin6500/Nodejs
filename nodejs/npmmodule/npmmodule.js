const chalk=require("chalk");
// const { default: validator } = require("validator");
// console.log(chalk.bgYellowBright("hello world"));
// console.log(chalk.bgCyanBright("he;llloo"))
// console.log(chalk.bgGray("Hello"))
// console.log(chalk.red.underline.inverse("hello world"))


const valid=require('validator');
const res=valid.isEmail('bhj@gmail.com')
// console.log(res)
console.log(res? chalk.green(res) : chalk.red(res))
// console.log(valid.isEmail("bhj@gmail.com"))