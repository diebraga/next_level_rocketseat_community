import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('list')

  res.json([
    'diego',
    "sarah"
  ])
})

app.listen(3333);