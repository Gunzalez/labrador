const express = require('express');
const app = express();
const cors = require('cors');
let bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

const statementSummary = {
    "period": "Nov 2017 - 16 Dec 2017",
    "balance": "125.10",
    "payment": "44.34",
    "current": "83.49"
};

app.get('/api/summary', (req,res) => {
    res.status(200).send({
        data: statementSummary,
    })
});

app.get('/', (req, res) => res.send('Hello World!'));

// Catch all 404 errors
app.use(function (req, res, next) {
    res.status(404).send({error: "These are not the droids you are looking you"})
});

app.listen('2000', () => {
    console.log('listening on port 2000');
});