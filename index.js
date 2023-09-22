import express from "express";
const app = express();
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});


// we passed the parameters to post the data we wanted to post to the server/BE
app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

// We replace that data from the matching argument from the url...
//    with the data se have passed in the params in postman. It changes the complete document(mongodb).
app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});


// It just change one of the parameter that we wanted to fill in. with the matching parameters from the URL.
app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});


// It just deletes the  matching parameter
app.delete("/user/angela", (req, res) => {
  // Deleting 
  res.sendStatus(200);
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
