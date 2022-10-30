const express = require("express");
const router = express.Router();
const Tweet = require("../models/Tweet");


app.get('/user',async (req,res) => {
    console.log(req.query)
    res.status(200).json(data.users)    
});

app.get('/user/:id', async (req,res)=>{
    let user=data.users.filter(user=>user.id==req.params.id)
    res.json(user)
})

app.post('/user',(req,res)=>{
    console.log(req.body)
    data.users.push(req.body)
    res.json(data.users)
})

app.delete('/user/:user',(req,res)=>{
    let user=data.users.filter(user=>user.id==req.params.id)
    console.log(user)
    let ind =data.users.indexOf(user)
    console.log(ind)
    data.users.splice(ind,1)
    res.json(data.users)
})



module.exports = router;