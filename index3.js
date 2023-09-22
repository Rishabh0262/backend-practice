import express from "express";

const app = express();
const port = 3000;


// this is my "custom middleware"

function logger(req, res, next) {
    console.log("This it the logger function!")
    console.log("Request Method : " + req.method);
    console.log("Request url : " + req.url);

    next();     // it is very important to add this at end.
    // if we don't add this ... the end-point "/" won't reach. as the function never exits. & remain till #HERE
}


app.use(logger);      // #HERE 

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
