import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.

// kindly re-register using API via Postman.
const yourUsername = "rishabhgupta";
const yourPassword = "grishabh";
const yourAPIKey = "e3a96564-083c-411c-833d-77bc23521a94"
const yourBearerToken = "4fe344c8-8e84-4b41-9415-aba5e137c9cf";

app.get("/",async (req, res) => {
  // const apiKeyData = await  axios.get("https://secrets-api.appbrewery.com/generate-api-key")
  // console.log(apiKeyData.data.apiKey)


  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth",async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  const result = await axios.get("https://secrets-api.appbrewery.com/random")
  // console.log(result.data)
  // res.render("index.ejs", {data : result.data, content : ""})
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.

  const content = JSON.stringify(result.data)
  res.render("index.ejs", {content : content})
  //  receive data as 'content' <%= content %> in index.ejs file.
});

app.get("/basicAuth",async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  const URL = "https://secrets-api.appbrewery.com/all";

  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  // /*
  const result = await axios.get(URL, {
      params : {
        page : 2
      },
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });

  // */

  const resp = JSON.stringify(result.data)
  res.render("index.ejs", {content : resp, data : {}})

  // res.render("index.ejs" , {data : result.data})

});

app.get("/apiKey",async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  const url = "https://secrets-api.appbrewery.com/filter?score=5"
  const result = await axios.get(url, {
    params : {"apiKey" : yourAPIKey}
  })
  console.log(result)
  const content = JSON.stringify(result.data)
  res.render("index.ejs", {content : content , data : {}})
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken",async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  const url = "https://secrets-api.appbrewery.com/secrets/45"
  const result = await axios.get(url, {
    headers : {Authorization : `Bearer ${yourBearerToken}`}
  })
  console.log(result)
  const content = JSON.stringify(result.data)
  res.render("index.ejs", {content : content , data : {}})
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
