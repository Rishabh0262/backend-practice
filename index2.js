// Morgan is used for "logging" type Middleware.

import morgan from "morgan";          // npm i morgan;
import express from "express";


const app = express();
const port = 3000;

app.use(morgan("tiny"))
// now we'll test the logging on the localhost with Postman.

app.get("/", (req, res) => {
  res.send("Hello");
});
// just got to default GET URL in Postman. & check here in CLI.(cmd)
// CLI o/p : "GET / 200 5 - 7.551 ms"

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
