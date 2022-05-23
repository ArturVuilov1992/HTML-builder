const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

const stat = fs.readdir(path.join(__dirname,'styles'),(err, files) => {
        const arr=[];

    for (let file of files){
        if (file.includes('.css')){  
             arr.push(file);
            }
    }

    for (let file of arr){
        fs.readFile(path.join(__dirname,'styles',file),'utf8',(err, data) => {
            if (err) throw err;
                console.log(data.length);
                    
            fs.appendFile(path.join('05-merge-styles','project-dist','bundle.css'), data, (err) => {
                if (err) {console.log(err);}
})           
              });  
    }          
        })

                    

    
                
                
                
                
                
                
                
                /* cd HTML-builder
                 node 05-merge-styles 
                 */