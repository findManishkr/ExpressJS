#       `Express`




### 3 ways to send data by `client` on the `backend`

 - ## 1.URL params
    |-> data is embeded in url only

    ```
      app.get('/user/:id', (req, res) => {
         console.log(req.params);
       });

       `url called` :   /user/4

       req.params = {id:4}

    ```

  - ## Query params 
    |-> key -value pairs can be passed in url such as 
        example = `localhost:3000/live?name = manish&age = 22`

        ```

            app.get('/live', (request, response)=>{

              console.log( request.query); //  Key–value pairs after ? in the URL
            response.send("this route is woking!");
            });  //  `get()` takes two arguments 1. route as string , 2 callback fn

                req.query = { name: "manish", age: 22}

        ```


- ## body params
    |->Body parameters are the key–value data sent by the client inside the HTTP request body and accessed in Express using req.body.
    |-> req.body is undefined without middleware

    |-> Body parameters are mainly used with:

         * POST → create data
         * PUT → replace data
         * PATCH → update data






      ```

       app.post('/categories/:category/product_id/:id', (req, res)=>{      // 
         
         console.log(req.body);  // data sent in req. body ie ( post, put,patch)
         
        
        res.status(201).send('this rounte in not working');
       })

       

      ```

      

##   `app.use()`  method
   * `app.use ` is used register `middleware ` in an express application\
        -  |-> what is middleware ? 
        -  |-> `middleware` is a function that executes b/w `request` arrival and `response` begin sent 
               
















* because `express` is waiting  for the middleware to either to \
  - send a response, or 
  - call next();