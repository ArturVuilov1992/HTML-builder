const fs = require('fs');
const path = require('path');

const stat = fs.readdir(__dirname,(err, files) => {
const ccc=files;
if (err) throw err;
    
    let chunk=[];

    for (let i=0;i<files.length;i++){
        if (files[i].includes('.')){ 
            chunk.push(files[i].split("").slice(0,-3).join("") +' ' + '-' +' ' + path.extname(files[i]))
        }    
    }
    
    for (let i=0;i<chunk.length;i++){
        const lsstat = fs.stat(path.join(__dirname,ccc[i]),(err, stats) => {
        if (err) throw err;
        
        console.log((chunk[i]+' '+'-'+' '+stats.size+' '+'bytes'))

        })
   }
})
