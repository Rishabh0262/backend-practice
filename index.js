import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
const yourBearerToken = "90efa655-c2d3-4369-87b2-8c25c161c923";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

/*  * In Postman : put on the URL, select request type.
                    Authorization : (type) Bearer token
                    Body : x-www-form-urlencoded
*/
app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  // const idInput = req.body.id;
  // const secretInput = req.body.secret;
  // const scoreInput = req.body.score;
  // const bodyParams = {
  //   "secret" : secretInput,
  //   "score" : scoreInput
  // }
  const idInput = req.body.id;
  const secretInput = req.body.secret;
  const scoreInput = req.body.score;

  const bodyParams = {
    secret: secretInput,
    score: scoreInput,
  };
  // config is mentioned above...

  try {
    const result = await axios.post(API_URL + "/secrets/", bodyParams, config);
    console.log(result.data);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (err) {
    console.log("uh oh, something went wrong \n", err);
  }
});









app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
  const secretInput = req.body.secret;
  const scoreInput = req.body.score;
  const bodyParams = {
    secret: secretInput,
    score: scoreInput,
  };

  try {
    const result = await axios.put(
      API_URL + "/secrets/" + searchId,
      bodyParams,
      config
    );
    console.log(result.data);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (err) {
    console.log("uh oh, something went wrong \n", err);
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
  const secretInput = req.body.secret;
  const scoreInput = req.body.score;
  const bodyParams = {
    secret: secretInput,
    score: scoreInput,
  };

  try {
    const result = await axios.patch(
      API_URL + "/secrets/" + searchId,
      bodyParams,
      config
    );
    console.log(result.data);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (err) {
    console.log("uh oh, something went wrong \n", err);
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.

  try {
    const result = await axios.delete(API_URL + "/secrets/" + searchId, config);
    console.log(result.data);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (err) {
    console.log("uh oh, something went wrong \n", err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
