import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
  return res.status(200).send('hello world xxy');
})

app.listen(3001, () => {
  console.log(`Running on port 3001`);
})