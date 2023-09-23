//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is Itsmebro

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3001;
var recPwd = ""

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res)=> {
    res.sendFile (__dirname + "/public/index.html")
})


// /*
// validating the results from the index.html
function pwdValidation(req, res, next) {
    console.log(req.body);
    // var data = req.body
    recPwd = req.body.password
    next();
}

// ######### useless
// function showAlert(req, res, next) {
//     res.send('alert("Wrong password!")');
//     console.log("wrong password!")
//     next()
// }

app.use(pwdValidation);
// */


app.post('/check', (req, res)=> {
    // var recPwd = req.body.password;
    console.log(recPwd);
    if (recPwd === "Itsmebro") {
        res.sendFile(__dirname + "/public/secret.html")
    }
    else {
        // app.use(showAlert)            // # useless
        res.sendFile(__dirname + "/public/index.html")
    }
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

