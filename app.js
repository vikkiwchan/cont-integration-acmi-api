const express = require('express');
const app = express();

module.exports = app;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        867-5309
      </body>
    </html>
  `);
});
