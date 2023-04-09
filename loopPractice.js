//Simple practice for showing how for and while loops work
//src="http://cdn.jsdelivr.net/g/filesaver.js"
//const File = require('file-class');
//const FileSaver = require('file-saver');
const fs = require("fs")

//npm i file-saver
//npm install file-class

function fileSysSave(){
    
    fs.writeFile('demo.txt', "Hi Magda, this is a new file", (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

fileSysSave();