const express =require("express")

const app = express()

app.get("/",(req,res)=> res.json({msg:"hello from me"}));

app.listen(8000,()=>console.log("hello there port is running catch it"));
//ok
//hello
jj