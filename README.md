## Express.js

    express can be defined as Framework for the JS in the backend work of the website. 

###    while Node.js : 
    It is the Run-time environment for JS, which allows to run .js file to the computer system.



## Creating an Express Server

### 1. Create directory

### 2. Create index.js file

### 3. Initialise NPM

### 4. Install the Express package

### 5. Write Server application in index.js

### 6. Start server





____________________________________________________________________________________




### 1. created a project folder

### 2. created index.js file

## On CMD : 

### 1. `npm init -y` 
        "-y" to fill the Default details in package.json

### 2. `npm install express` 

### 3. Update "package.json" 
        added : `"type": "module",`   after   `"main" : "index.js"





## To run server...

### On CMD :

    `node index.js`

"We'll be using 'nodemon' instead."  





### CMD  to check which port is currently "listening"

 netstat -ano | findstr "LISTENING"





_________________________________________________________________________________________________________________________________________________

******* HTTP Request *********

    1. get : Use when you Request a resourse from the server.[HTML website, TEXT, data,etc]. GETting something from the server.
    2. post : Sending a resource to a server. on serverside do whatever you want to do... [like validating the login Credentials.]
    3. put : Replace an entire resourse.
    4. patch : Replace some particular elements in the resource those need to be UPDATEd. patch up resourse. 
    5. delete : 








## nodemon 
    It is a tool which is used for unnecessary manual star/stop of the node app. When there is any changes in the file.


### To run server...

#### On CMD :

        $`npm i`
    `nodemon index.js`

________________________________________________________________________________________________________________________________________________

## EJS   
   Helps in passing the Data from "Server to Client" & "Client to Server"


    Helps in separating the Frontend and the Backend

    VS code  extentsion : EJS language support

    `$ npm i ejs`

    all front-end files should be in 'views' folder.



    in the 'app.get()' function... 
        We can pass `res.render('destination.ejs', data/object/array/et)`


    if we pass the OBJECT ... its values are directly accessed by using the 'key'... instead 'obj.key'

    In case, we don't pass any data. 
        then, we should refer it as *"locals"*. 
            e.g.,    locals.nameOfTestingVarable




    All the '*.ejs' files are supposed to be relative to 'views' folder.
    
    All the 'static/*.css" files are supposed to relative to 'public' folder.[means within it, [excluding the 'public' keyword] while including the files.]

    

    ejs partials & labels : 

      `app.use(express.static("public"))`

        When we've told EXPRESS where our "public-folder" is. 
        It'll treat everything inside 'static file'. 
    Reason : The filepath works for Node/Express for "Dynamic pages", is little bit different from "Static pages"

    are routed & their locations generated dynamically  (it sends a "GET" request to the different URL dynamically and that request is being handled in the `app.get()`.)

    And the static part of the website like 
### photos /css /js-files... 
    doesn't need to be generated dynamically. They are the static things. So, that we can satisfy the dynamic folder they live in.

    Partials : 
        using - <%- include("header.ejs") %>



    


 








## API 
    Ex.   {REST:API} , SOAP, gRPC, GraphQL

    REST:API - Widely used because It needs HTTP protocols(GET, POST, PUT, PATCH, DELETE) for interaction.

    JS obj. =>  JSON        :       `const jsonData = JSON.stringify(data);`

    JSON => js obj          :       `const data = JSON.parse(jsonData);`




    data sent from BE -> FE : res.render("location.ejs" , {data : data, ... })

    data received in FE from BE : "locals" obj...


    data sent from FE -> BE : via HTML form ... with destination as '/...'  which is to handled at BE with `app.get("/..." , ) OR app.post("/..." , )`

    
    Git commit (Axios) :  We've used logic in index.js and sending the API data to FE index.ejs [data received are in 'locals' which we can  get it as e.g, 'locals.data'  although we can have all the data directly as 'data' etc,etc...]"


### Authentication in API : 
    e.g. : https://secrets-api.appbrewery.com/

    1. Basic authentication :
        https://stackoverflow.com/a/74632908 
        
    2. API Key authentication :  can be generated for a particular use let's say 1000 api-calls and we don't have to worry about the user credentials/payment breach 




    3. Bearer token Authentication : [oauth 2.0] 
        we take username password to login.
        we generate a token to be used with API interaction (instead of username pwd)

        https://stackoverflow.com/a/52645402



#### Postman test : 
    POST /register : register new user.        body -> x-www-form-urlencoded ... passing the key-value pairs

    GET /generate-api-key :  just hit the URL you'll get the response.

    POST /get-auth-token : (for particular user) returns 'error' on wrong credentials or if no registration.            
        body -> x-www-form-urlencoded ... passing the key-value pairs
        {username : "username", password : 1234}



    


    GET /filter : either pass in URL params...
                    else, 
                    pass "apiKey" parameter in ------  
                    Or
                    in authorization section => (Type)-> API key
                            putting the key-value pair in the  respective blocks.
                            make sure to Add it in the correct way. correct spells if the
                            'key' in key-value pair.
                            'value' would be apiKeyValue... apha-numeric value...

                            
                            rest "Add to" => "query params"

                (NOTE : API key can be generated simply by hitting the URL mentioned in the Docs)


    GET /secrets/{id} : uses bearer token.

            use the provided URL. 
                use Authorization => (type) bearer token ....                 token can be generated from "POST /get-auth-token" ... register yourself first


                 
### REST-API
    .get(URL, config)


    .post("URL", body/data, config)
        body : {js-object key-value pair}
        config : headers, authentication, all kind of setting we can use in POSTMAN. 
                    [Ref. axios docs.]

    .put(URL , data , config)
        Changes the entire particular data entry in the dataset by replacing it.

    .patch(URL ,data, config)


    .delete("URL", config)


### Build own REST-API

    all the routes will work on the base URL : http://localhost:3000.
    rest the routes will be accessible to app.get/post/put/delete(url, callback Fn.)
    then the RESTFUL feature will start to work according to the Logic.


    `http://localhost:3000/jokes/2`
#### *path parameters*
     : When there is a value passed over the URL.
     
     e.g. ("/jokes/:id") that '2' is aligned with 'id' that has been to the URI.




    GET request :   
        This 'id' will later be get by "*req.params.path_parameter*" (type = string)
            {path_parameter = id}  
            


        In POSTMAN : 'http://localhost:3000/jokes/2' after that, ...     
            (params) => (path variables) => {key : value}       .... '/:id' will be replaced by '2'.     

    POST request :    
        In POSTMAN : on desired URL. (POST)   
        (Body) => (x-www.form-urlencoded) => {key : value} [data to be post]  

        In code :
            app.post(URL, (req, res) => {...})   

            Data sent from the Form from UI can be get form *req.body._name_*    **_name_** : key-name of the value passed by the form-data.   


**req.query.key** if we need a authentication key... i.e, to be passed in 




### sending data from REST-API 

    **res.json(js_object)**


### sending data from "backend" to ".ejs" file 

    **res.render("destination.ejs", {data : data}) ...  

    {in .ejs : which can be recieved by "locals" variable... that contains all the data sent by B.E.}




# Database 

## postgres

    npm : pg
    (package name for 'postgres')


    step 1 : install postgres server.
    https://sbp.enterprisedb.com/getfile.jsp?fileid=1258649 to install the EDB - PG

    step 2 : pgAdmin - UI to tap into prosgres-server.
        This will be installed as well.


    open pgAdim app. > create new database > create new table
        (select the table > click on query icon (to create the table using SQL scripts))

    column_name should be of same *CASE*.

    `
        import pg from "pg";

        const db = new pg.Client({
            user : "postgres",
            host : "localhost",
            database : "world",
            password : "Pgkapswd@1",
            port : 5432,
        })

        db.connect();

        db.query("SELECT * FROM capitals", (err, res) => {
            if (err) {
                console.error("Error executing query", err.stack);
            } else {
                quiz = res.rows;
            }
            db.end();
        });
    `

### pg-admin

    STEP 1 - We write the query to create the table.
    STEP 2 - We 'refresh' the DB.
    STEP 3 - We go to the table and import the file_name.csv (or any required type photo)
    
        Step 4 - (General) file & format -> fill the required one
        Step 5 - (Options) Header (enable) such that the file we're importing also includes 1st row as Header (actual data starts with 2nd line)
        Step 6 - (Columns) Columns to import ... (we'll remove the tables we don't want... like 'id' has to be auto generated. we don't have it in our importing file.)



    





