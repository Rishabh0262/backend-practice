import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  var data = {
    fName : '',
    lName : "",
    size : 0
  }
  res.render("index.ejs", data);
  
});

app.post("/submit", (req, res) => {
  var localFName = req.body["fName"]
  var localLName = req.body["lName"]

  var n = localFName.length + localLName.length
  var data = {
    fName : localFName,
    lName : localLName,
    size : n
  }

   

  res.render('index.ejs', data)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
