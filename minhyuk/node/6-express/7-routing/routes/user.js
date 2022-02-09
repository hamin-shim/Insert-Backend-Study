import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  console.log('middleware for users!');
  next();
});

router.get('/', (req, res) => {
  res.status(201).send('GET: /users');
});

router.post('/', (req, res) => {
  res.status(201).send('POST: /users');
});

router.put('/:id', (req, res) => {
  res.status(201).send('PUT: /users/:id');
});

router.delete('/:id', (req, res) => {
  res.status(201).send('DELETE: /users/:id');
});

export default router;
