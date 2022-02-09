const fs = require('fs');
const path = require('path');

var dirDst = process.argv[2];
var dirRoot = "C:\\Users\\alsgu\\Pictures";

// fs.stat(dirRoot+"\\"+dirDst, (err, stats) => {
//     if(err) {
//         console.log("Couldn't finish the task.");
//     }
    
// })

fs.readdir(dirRoot+"\\"+dirDst, (error, filelist) => {
    filelist.forEach(element =>{
        var regExp = /(mp4|mov)$/gm
        if(element.match(regExp)){
            fs.rename(dirRoot+path.sep+dirDst+path.sep+element,dirRoot+path.sep+dirDst+path.sep+"video"+path.sep+element,(error)=>{
                console.log(error);
            })
        }
    })
})

// console.log(__dirname);

// fs.forEach()
