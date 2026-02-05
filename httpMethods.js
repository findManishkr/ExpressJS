const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

// use `body parser` middleware


app.use( bodyParser.json());  // for parsing json
app.use(bodyParser.urlencoded( {extended:true})); // for parsing url encoded data 

// `delete` -> to delete dat

app.delete('/users/:id', (req,res)=>{
     

    return res.send('user deleted successfully!');
})

// `patch` :-> to update partial data 

app.patch( '/users/:id', (req,res)=>{
     return res.send('user updated partially');
})


// `put` -. to replace entire data 

app.put('/users/:id', (req,res) =>{
     res.send('user updated fully');
})



// `post` to create data 

app.post('/users', (req, res)=>{
     
    const {name, age,class:userclass} = req.body;

 const token = req.headers['content-type'];
      console.log( token);

    res.status(201).json( {
        message:"user created",
        user: { name, age,class:userclass}
    });


})


// get with params

app.get('/users/:id', (req, res)=>{
    const userId = req.params.id;
    res.send(`User Id is : ${ userId}`);
  
})




// read / fetch data
app.get('/users', (req, res) => {

    const users = ["Ram", "Bam", "Cam"];
    const { name } = req.query;

    console.log(req.query);

    // if no filter, return all users
    // if (!name) {
    //     return res.json({ users });
    // }
    
    const filteredUsers = users.filter(
        (user) =>{ return user.toLowerCase() === name.toLowerCase() }
    );

    // optional: user not found
    if (filteredUsers.length === 0) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.json({ users: filteredUsers });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
