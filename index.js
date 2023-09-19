const fs = require('fs')

data = "This file is created via 'fs'[file system] from NodeJS. \nThis content is written through index.js file"




// ************    Writing a data to a file!    ************


// fs.writeFile("newFile.txt", data, (err)=> {
//     if (err) console.log(err);
//     else console.log("file created successfully!")
// })

data1 = ""

fs.readFile("./message.txt", 'utf-8', (err, data) => {
    if (err) throw err;

    else {
        data1 = data;
        console.log(data);
    }
})


