// const http = require("http");
// const fs= require("fs");
// const url=require("url");

// const myserver= http.createServer((req,res)=>{

//     const log=`${Date.now()}: ${req.url}:New Req Recevied \n`

    
//     const myurl=url.parse(req.url);
//   fs.appendFile('log.txt',log,(err,data)=>{

   
    
    
//     switch(myurl.pathname,true){
//         case "/":
//             res.end("HomePage");
//             break;
//             case "/about":
            
//                 break;
//                 default:
//                         res.end("404 not found ");
    
//     }

//   });
  
    
// });

// myserver.listen(8000,()=> console.log('Server started'));