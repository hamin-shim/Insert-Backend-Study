const fs = require('fs').promises;

//reading a file
fs.readFile('./text.txt', 'utf8')
  .then(console.log)//(data) => console.log(data)
  .catch(console.error);

  //비동기는 순차적으로 안될수도(코드순서대로 안될수도) 있음.
  //writing a file
fs.appendFile('./file.txt', 'Yo!, Dream Coders! :) ')
  .then(() => {
    //copy
    fs.copyFile('./file.txt', './file2.txt') //비동기식이기 때문에 순서 보장 안돼서 then으로 순서 지정
      .catch(console.error);      
  })
  .catch(console.error);

fs.mkdir('sub-folder')
  .catch(console.error);

fs.readdir('./')
  .then(console.log)
  .catch(console.error);