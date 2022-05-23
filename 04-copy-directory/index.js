const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

    fsPromises.mkdir(path.join(__dirname,'files-copy')).then(function() {
        console.log('Directory created successfully');
        }).catch(function() {
        console.log('Directory exists already');
    });

    const stat = fs.readdir(path.join(__dirname,'files'),(err, files) => {
        for (let file of files){
            fs.copyFile(path.join(__dirname,'files',file), path.join('04-copy-directory','files-copy',file), (err) => {
                if (err) throw err;
                
              });        }   
    })

    

    