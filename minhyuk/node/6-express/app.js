import express from 'express'
const app = express();

// app.get('/sky/:id', (req, res, next) => {
//     // console.log(req.path);
//     // console.log(req.headers);
//     console.log(req.params);
//     console.log(req.params.id);

//     console.log(req.query);
//     console.log(req.query.keyword);
//     console.log('get');




//     res.setHeader('key', 'value');    // res.send('hi!');
//     res.status(201).send('created');
// });

// app.all('/api/*', (req, res, next) => {
//     console.log('all');
//     next();
// });

// app.use('/sky', (req, res, next) => {
//     console.log('use');
//     next();
// });


// app.get(
//     '/',
//     (req, res, next) => {
//         console.log('first');
//         if(true){
//             return res.send('Ellie');
//         }
//         res.send('Hello');// send는 한번만 혹은 return 해야함.
//         next(new Error('error'));
//     },
//     (req, res, next) => {
//         console.log('first2');
//         next();
//     }
// );

app.use(express.json());

app.post('/', (req, res, next) => {
    console.log(req.body);
});

// app.use((req, res, next) => {
//     res.status(404).send('Not available!@_@');
// });

// app.use((error, req, res, next) => {
//     console.error(error);
//     res.status(500).send('Sorry, try later!');
// })
app.listen(8080);