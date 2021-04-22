const express = require('express');
const app = express();
const {
  models: { Product },
} = require('./db');

module.exports = app;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        The Acme API
        <ul>
        <a href='/api/products'>/api/products</a>
        </ul>
      </body>
    </html>
  `);
});

app.get('/api/products', async (req, res, next) => {
  try {
    res.send(await Product.findAll());
  } catch (ex) {
    next(ex);
  }
});
