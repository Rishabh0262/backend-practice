## with initailly provided files. [commit 1]

## On CMD : 

    1. npm i

    1.2  npm i body-parser

    2. nodemon index1.js

## Fetching project directory

`import { dirname } from "path";`
`import { fileURLToPath } from "url";`
`const __dirname = dirname(fileURLToPath(import.meta.url));`

These lines helps in getting the path of the project directory.







#### @ '/' - we get to redirected to 'public/index.html' file.

#### onClicking Submit : we SEND a POST req. to @ '/submit' end-point.








## 1
body-parser (Middle ware : pre-processing type) : 
`app.use(bodyParser.urlencoded({extended : true}))`

## 2
Morgan is a "logging" type Middleware : 
`app.use(morgan("tiny"))`    // instead of 'tiny' we can also use different keywords. see : https://www.npmjs.com/package/morgan for detailed logging




## Different types of middle-ware : 
    1. pre-processing 
    2. Authentication
    3. Logging
    4. Error




index1.js : body-parser
index2.js : morgan
index3.js : custom middle-ware, a function(func) for logging.             Later used in `app.use(func)`
index4.js : 



