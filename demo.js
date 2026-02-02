
const express = require('express');

const app = express();

const PORT = 3005;




// middleware function

const logRequest = (req, res, next)=>{

     console.log(`received a ${req.method} request from ${req.ip}`);
     next();    //function that points to the next matching middleware/route, next is injected by Express to control middleware chaining.
}


// registering middleware function `log request` using method `app.use()`

app.use(logRequest);
      


app.get('/', (req,res)=>{     // route handler

      console.log('this route is working');
    
       res.json(    { success:true,

                      data: { name:"Manish",
                        class:"B.Tech",
                        Branch:"Mechanical Eng",
                        age : 22
                      } 
                    }
                );
});

/*
   `res.status()`:-> set http status code 
    - used before sending data 
  
*/

app.get('/created', (req, res) => {
   res.status(201).json({ message: 'Resource created' });
   

});



app.get('/object', (req,res)=>{

    res.send({name:"manish", age:22});

});




app.listen(PORT, ()=>{
 
    console.log(`serving is running at port: ${PORT}`);

});     // setting servat at `PORT`


