/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
// const fs = require('fs');
import fs from "fs";

var inputVal = "";

inquirer.prompt([{
    name : "Input" ,
    message : "Enter the input : ",
    type : "input"
}])
    .then(answer => {
        console.log("input is taken and the answer is : " + Object.values(answer)[0]);




        // ******* directly storing the input in the "test.txt" *******
        fs.writeFile('test.txt', Object.values(answer)[0], err => {
            if (err) {
              console.error(err);
            }
          });
        inputVal = Object.values(answer)[0];
    })
    .catch(err => {
        if(err) {
            console.log("uhh oh! We've encountered an errror \n" + err);
        }
    })
  
    //   ***** reading the string that has been stored to the input *****
      fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
        var qrImage = qr.image(data, { type: 'png' });
        qrImage.pipe(fs.createWriteStream('websiteQR.png'));
        
        var svg_string = qr.imageSync('', { type: 'png' });
      });





        
    // **** Writing the input to the file. Through a variable that stores the user input. *****

    fs.writeFile('input.txt', inputVal, err => {
        if (err) {
          console.error(err);
        }
      });


    var qrImage = qr.image(inputVal, { type: 'png' });
    qrImage.pipe(fs.createWriteStream('directLinkQR.png'));
     
    var svg_string = qr.imageSync(inputVal, { type: 'png' });