const { log } = require("console");
const fs=require("fs");
// syncronus
// fs.writeFileSync("./test.txt","Hey there");

// Asyncronus
// fs.writeFile("./test.txt","hellow node js file system",(err)=>{});


// // syncronus

// const result= fs.readFileSync("./test.tx","utf-8");
// console.log(result);

// Asyncrnus 

fs.readFile("./test.txt","utf-8",(err,result)=>{

    if(err){
        console.log("Error",err);
            
    }else{
        console.log(result);
        
    }
})