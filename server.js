const express = require('express'); //   we got access , to express function

const app = express();    // app is new application express object
const bodyParser = require('body-parser');

// using the `app` object , bind it to a port u  want server to listen for `socket connection`

const PORT = 3000;




// use middlewares here 

app.use( bodyParser.json());  // for parsing application/ json
app.use(bodyParser.urlencoded({extended:true}));   //for parsing application// url encoded data
app.use( bodyParser.text());     // for parsing application // text






app.post('/user/:id', (req, res) => {
  
          console.log(req.headers);
          console.log(req.params) // Data extracted from URL path variables defined in the route.

  res.send('this route is also working!');
});


app.post('/categories/:category/product_id/:id', (req, res)=>{      // 
         
         console.log(req.body);  // data sent in req. body ie ( post, put,patch)
         
        res.status(201).send('this rounte in not working');
})




// define routes

app.get('/live', (request, response)=>{

        console.log( request.query); //  Key–value pairs after ? in the URL
       response.send("this route is woking!");
});  //  `get()` takes two arguments 1. route as string , 2 callback fn


app.get('/home', (request, response)=>{
      
      // if some one hits `localhost:3000/home` from the machine, callback will be executed

      // `request`:->  request object contains details about `incoming request` by client side, such as `query params`, `body parmas` 
      // `response`:-> response object contains details about what response will be sen to clint

       response.send("Welcome to the home page");
});


app.get('/home/aboutus', (req,res) =>{
     
     res.send( 'my name is manish kumar and i am studying mechanical enginerring');

    

    
});

app.get('/page', (req,res)=>{

        
        console.log( req.params);

        res.send(req.query);

     });



app.listen( PORT, ()=>{
     /*
       app.listen() starts an HTTP server, binds it to a specified port, 
       and begins listening for incoming client requests.
     */

    // this callback funcn is useful to do any action  post the server is created 

    // `example`
     //  1. db_connection 


    // once the `PORT` is successfully bound, then `callback` function executes

     console.log( `sever is running on http://localhost:${PORT} `);

    
});   // `listen` method takes 2 parameters `1.port no.    2. callback function ` 


