const path = require('node:path');
const express = require('express');

const app = express();
const port = 8080;
const rootDirectory = __dirname;

app.use(express.static(rootDirectory));

app.get(['/', '/home'], (req, res) => {
  res.sendFile(path.join(rootDirectory, 'index.html'));
});

app.get('/menu', (req, res) => {
  res.sendFile(path.join(rootDirectory, 'info', 'menu.html'));
});

app.get('/order', (req, res) => {
  res.sendFile(path.join(rootDirectory, 'info', 'order.html'));
});

app.get('/item/:name/price/:price', (req, res) => {
  const { name, price } = req.params;
  res.send(`<h1>${name} ราคา ${price} บาท</h1>`);
});

app.use((req, res) => {
  res.status(404).send(
    'ใช้ path "/home", "/menu", "/order" หรือ "/item/:name/price/:price" เท่านั้น',
  );
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});