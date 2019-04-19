const express=require('express');
const cors = require('cors')
const app=express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.get('/',(req,res)=>{
    res.send('hi i am in server')
})

app.post('/facts/',(req,res)=>{
   let num= req.body.number;
   num=num+5;
   let mymessage='increment by five is :'+num;
    res.send({success:true,message:mymessage})
})
const PORT=1166;
app.listen(PORT,()=>{
    console.log('server started at http://localhost:'+PORT);
})