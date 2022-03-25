const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4500;
const host = process.env.IP || '127.0.0.1';
const buildPath = path.join(__dirname, '..', 'app', 'build');

app.use(express.static(buildPath));

// * = our url  (powerful-crag...).  Send end-user the index.html file in app/build
app.get('*', (req, res) => {
   res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
   console.log(`Server is listening on ${host}:${port}`);
});
