import express from "express";
const app = express()

const port = 3010

app.get("/", (req, res) => {
    console.log(res);
    res.send("<h1>Welcome to the Home!</h1>")
})

app.get("/contact" , (req, res) => {
    res.send("<h1>Contact : 9*******</h1> ")
})

app.get("/about", (req, res) => {
    res.send("<h1>I'm Rishabh!</h1>")
})



app.listen(port, () => {
    console.log(`Server is running on the port ${port}`)
})
