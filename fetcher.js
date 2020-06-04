const request = require('request');
const fs = require('fs');

const input = process.argv.slice(2);
const domain = input[0];
const filePath = input[1];


  if (fs.existsSync(filePath)) {
    request(domain, (error, response, body) => {
      if(error){
        throw 'domain not a valid domain';
      }
      else if(response.statusCode == 200){
        fs.writeFile(filePath, body, (err) => {
          if(err){ 
            throw `something went wrong`;
          }
          console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`)
        })}
        else {
          throw "404 website cant be reached right now"
        }
      });
      
    }
    else {
      console.log(`not a valid file path ${filePath}`);
    }





    
    