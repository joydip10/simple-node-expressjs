const express=require('express');
const cors=require('cors');
var bodyParser = require('body-parser');

const app=express();

app.use(cors());
app.use(bodyParser.json());
const port =process.env.PORT || 300;
const users=[ {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "phone": "1-463-123-4447",
    "website": "ramiro.info"
  }];

//query parameter
app.get("/users",(req,res)=>{
    const search=req.query.search;
    const user=users.filter(user=>user.name.toLocaleLowerCase().includes(search))
    if(search){
        res.send(user);
    }
    else{
        res.send(users);
    }
})


//dynamic api
app.get("/users/:id",(req,res)=>{
    console.log(req.query);
    const id=req.params.id;
    const user=users[id-1];
    res.send(user)
})

app.get("/fruits",(req,res)=>{
    res.send(["mango","banana","apple"]);
})

app.get("/fruits/:fruitName",(req,res)=>{
    res.send(`Yummy fruit: ${req.params.fruitName}`);
})
//post method
app.post("/users",(req,res)=>{
  const newUser=req.body;
  users.push(newUser);
  console.log('INSIDE POST',req.body);
  res.json(users);
})
app.listen(port,()=>{
    console.log(`Listening to the port http://localhost:${port}`);
})