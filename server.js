const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();
const dotenv = require('dotenv')

dotenv.config()

app.use(require('prerender-node').set('prerenderToken', process.env.PRERENDER_TOKEN));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
