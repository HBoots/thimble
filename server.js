const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const host = process.env.IP || '127.0.0.1';
const buildPath = path.join(__dirname, 'build');

app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on ${host}:${port}`);
});
