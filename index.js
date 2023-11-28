import express from 'express'

const app = express()
const port = 3000;


app.get("/", (req, res) => {
    const d = new Date();
    var day = d.getDay();
    
    if (day == 0 || day == 6) {
        var dayType = "a weekend";
        var advice = "it's time to Chill"
    }
    else {
        var dayType = "the weekday";
        var advice = "it's time to work hard for sure!"
    }


    res.render("index.ejs",{
        dayType : dayType,
        advice : advice
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
