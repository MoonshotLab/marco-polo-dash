require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/log', require('./api/log'));

// end any other requests to react frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server running on port ' + port);
});
