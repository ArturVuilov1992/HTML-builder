
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const fs = require('fs');
const path=require('path');
const { stdin, stdout } = process;

const output = fs.createWriteStream(path.join(__dirname,'text.txt')); 
stdout.write('Введи текст, который потом узришь в текстовом файле text.txt\n');
stdin.on('data', data => {

     fs.appendFile(path.join(__dirname,'text.txt'), data, (err) => {
        if (err) {
          console.log(err);
        }
      
    })
});

readline.on('SIGINT', () => {
    readline.question('Хотите выйти? Если да, то введите "yes" ', (answer) => {
      if (answer === 'yes') {
          readline.pause()
    }else if(answer !== 'yes'){readline.resume();console.log('продолжаем)')}
    });
  });

