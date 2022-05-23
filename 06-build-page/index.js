const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');


fs.mkdir(path.join('06-build-page',' project-dist'), { recursive: true }, err => {
    if (err) throw err;
});
fs.mkdir(path.join('06-build-page',' project-dist','assets'), { recursive: true }, err => {
    if (err) throw err;
});
fs.mkdir(path.join('06-build-page',' project-dist','assets','fonts'), { recursive: true }, err => {
    if (err) throw err;
});
fs.mkdir(path.join('06-build-page',' project-dist','assets','img'), { recursive: true }, err => {
    if (err) throw err;
});
fs.mkdir(path.join('06-build-page',' project-dist','assets','svg'), { recursive: true }, err => {
    if (err) throw err;
});




fs.writeFile(path.join('06-build-page',' project-dist','index.html'),'',err => {
    if (err) throw err;
});

/* const stat = fs.readdir(path.join('06-build-page','components'),(err, files) => {
    if (err) throw err;

    for (let file of files){
        fs.readFile(path.join('06-build-page','components',file),'utf8',(err, data) => {
            if (err) throw err;
            const inner=data;
            console.log(inner);

            fs.writeFile(path.join('06-build-page','template.html'), inner, function(error){
                if(error) throw error; 
            });
        })
    }
        
             
            
            
        });   */
 const ppp = fs.readFile(path.join('06-build-page','template.html'),'utf-8',(err, data) => {
    if (err) throw err;
    let uuu=data;
    let header=[];
    
    fs.readFile(path.join('06-build-page','components','header.html'),'utf8',(err, data) => {
        if (err) throw err;
        header.push(data);

    }) 
    
    fs.readFile(path.join('06-build-page','components','footer.html'),'utf8',(err, data) => {
        if (err) throw err;
        header.push(data);

     }) 
     
     fs.readFile(path.join('06-build-page','components','articles.html'),'utf8',(err, data) => {
        if (err) throw err;
        header.push(data);
         console.log(header[2]);


       let head=  uuu.replace('{{header}}',header[1]);
        uuu.replace('{{footer}}',header[0]);
        uuu.replace('{{articles}}',header[2]); 


let sum=uuu.slice(0,393)+'\n' + header[0] +'\n<main class="main">' +'\n' + header[2] +'\n</main>' + header[1] + '\n</body>' +
'\n</html>';

fs.appendFile(path.join('06-build-page',' project-dist','index.html'),sum,(err, data) => {
    if (err) throw err;
    
 }) 

    }) 

    


 })


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
                
        fs.appendFile(path.join('06-build-page',' project-dist','style.css'), data, (err) => {
            if (err) {console.log(err);}
})           
          });  
}          
    })



       fs.readdir(path.join(__dirname,'assets','fonts'),(err, files) => {
        for (let file of files){ 
            fs.copyFile(path.join(__dirname,'assets','fonts',file), 
            path.join('06-build-page',' project-dist','assets','fonts',file), (err) => {
                if (err) throw err;
            }) }  
                       
     });

     fs.readdir(path.join(__dirname,'assets','img'),(err, files) => {
        for (let file of files){ 
            fs.copyFile(path.join(__dirname,'assets','img',file), 
            path.join('06-build-page',' project-dist','assets','img',file), (err) => {
                if (err) throw err;
            }) }  
                       
     });

     fs.readdir(path.join(__dirname,'assets','svg'),(err, files) => {
        for (let file of files){ 
            fs.copyFile(path.join(__dirname,'assets','svg',file), 
            path.join('06-build-page',' project-dist','assets','svg',file), (err) => {
                if (err) throw err;
            }) }  
                       
     });
    