const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

// Catch all 404 errors
app.use(function (req, res, next) {
    res.status(404).send({error: "These are not the droids you are looking you"})
});

app.listen('2000', () => {
    console.log('listening on port 2000');
});