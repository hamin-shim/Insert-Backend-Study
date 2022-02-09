const { count } = require('console');
const fs = require('fs');
const data = [];

fs.createReadStream('./file.txt', {
//   highWaterMark: 8, // 64 Kbytes
//   encoding: 'utf-8',
})
    .on('data', chunk => {
        // console.log(chunk);
        data.push(chunk);
        console.count('data');
    })
    .on('end', () =>{
        console.log(data.join(''));
    })
    .on('error', error => {
        console.log(error);
    })