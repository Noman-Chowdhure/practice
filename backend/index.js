const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
app.use(cors())
app.use(express.json());
const user = [
    {
        id:1,
        name:'noman',
        email:'noman123@gmail.com'
    },
    {
        id:2,
        name:'afifa',
        email:'afifa123@gmail.com'
    }
]

app.get('/', (req,res)=>{
    res.send('hello world')
});

app.get('/user' , (req,res)=>{
    res.send(user)
})

app.get('/user/:id',(req,res) =>{
    const id = parseInt(req.params.id);
    const fuck = user.find(abc => abc.id === id);
    res.send(fuck);
})


app.post('/user',(req,res)=>{
    const newUser = req.body
    console.log('post is heittiing',newUser);
    const ppp = user.length + newUser;
    user.push(ppp);
    res.send(user)


})

app.listen(port, ()=>{
    console.log(`port is listen on ${port}`)
})