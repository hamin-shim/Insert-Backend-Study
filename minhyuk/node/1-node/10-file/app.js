const fs = require('fs');

// 3
// rename(...., callback, data) //비동기
// try{ renameSync(....) } catch(e) { }  //not recommended, blocking(call back 전달 x)
// promises.rename().then().catch(0) //얘도 비동기

try{
    fs.renameSync('./text.txt', './text-new.txt');
} catch (error){
    console.log(error);
}

fs.rename('./text-new.txt', './text.txt', (error) => {
    console.log(error);
})
console.log('hello');

fs.promises
    .rename('./text2.txt', './text-new.txt')
    .then(() => console.log('Done!'))
    .catch(console.error);
