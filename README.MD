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

better use : "nodemon" instead of "node.       Helps in "hot reload"
                "npm i -g nodemon"
     
    `nodemon index.js`
         





### CMD  to check which port is currently "listening"

 netstat -ano | findstr "LISTENING"









_________________________________________________________________________________________________________________________________________________

******* HTTP Request *********

    1. get : Use when you Request a resourse from the server.[HTML website, TEXT, data,etc]. GETting something from the server.
    2. post : Sending a resource to a server. on serverside do whatever you want to do... [like validating the login Credentials.]
    3. put : Replace an entire resourse.
    4. patch : Replace some particular elements in the resource those need to be UPDATEd. patch up resourse. 
    5. delete : 









