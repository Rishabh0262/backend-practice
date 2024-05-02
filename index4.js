import express from "express";
//  Step 1
import bodyParser from "body-parser";
//  Step 2
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

// encoding the data that is send by the endpoint(Form). So that it can be access by the "req.body"
app.use(bodyParser.urlencoded({extended : true}))

// Step 3
app.get("/",(req, res)=> {
  res.sendFile(__dirname + "/public/index.html");
  
})


// /*  *** custom middleware to fill the data    // An alternative for the working using custom-middleware

function bandNameGenerator(req, res, next) {
  console.log("inside custom middleware\n" + req.body["street"]);
  
  res.send(`<h1>Your Brand Name is : </h1><h2> ${req.body.street}   ${req.body.pet} </h2>`)
  next();
}
app.post("/submit", bandNameGenerator)

// */

app.post("/submit", (req, res) => {
    var data = req.body; 
    console.log(req.body);

  res.send(`<h1>Your Brand Name is : </h1><h2> ${data.street}   ${data.pet} </h2>`)
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
