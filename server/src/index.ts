import express from 'express';

const port = 8080;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello tonemato');
});

app.listen(port, () => {
  console.log('server is running on ', port);
});
