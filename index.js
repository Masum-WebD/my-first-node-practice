const express = require('express');
var cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors())
const port =5000;
    const users =[
        {id:1,name:'sujon',email:'sujon@gmail.com',number:01712121221},
        {id:2,name:'sumon',email:'sumon@gmail.com',number:01712121221},
        {id:3,name:'raju',email:'raju@gmail.com',number:01712121221},
        {id:4,name:'aslam',email:'aslam@gmail.com',number:01712121221},
        {id:5,name:'shamim',email:'shamim@gmail.com',number:01712121221},
        {id:6,name:'roton',email:'roton@gmail.com',number:01712121221},
        {id:7,name:'sojib',email:'sojib@gmail.com',number:01712121221}
    ]
app.get('/', (req,res) =>{
    res.send('look mama!! hurreh I am jumping now node js')
})
app.get('/users',(req,res)=>{
    if(req.query.name){
        const search =req.query.name.toLowerCase()
        const matched=users.filter(user =>user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else{
        res.send(users)
    }
   
})

app.get('/users/:id', (req,res) =>{
    console.log(req.params);
    const id=parseInt(req.params.id)
    const user=users.find(u => u.id === id);
    res.send(user)
})

app.post('/user',(req,res)=>{
    console.log('request', req.body)
    const user = req.body
    user.id=users.length +1;
    users.push(user)
   res.send(user)
})
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})