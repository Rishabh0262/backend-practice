// Body parser is of "pre-processor" type middleware.

import bodyParser from "body-parser";         // We added this package 

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // console.log(__dirname + "/public/index.html")

  res.sendFile(__dirname + "/public/index.html");
});


// ".use()" : Mount a middleware using express.
//  ".urlencoded({extended : true})" : to create a body for URL-encoded request like our form submission. 
//  as we wanted the URL incoded DATA that is sent via POST from the form. 
app.use(bodyParser.urlencoded({extended : true}))

app.post("/submit", (req, res)=> {
  console.log(req.body)             // So that it can be access by the "req.body"
})

//  on Postman : we used the URL : localhost:3000/submit ... POST : data via  Body : x-www-form-urlencoded

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
