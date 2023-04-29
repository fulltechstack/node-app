
const express = require('express');
  
const app = express();
const PORT = 9080;

app.use('/',(req,res)=>{
    console.log(res);
    res.send('working successfully');
});
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);