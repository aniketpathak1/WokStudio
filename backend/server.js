var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:8081',
    optionSuccessStatus: 200
};

app.use(cors());

const db = require('./app/config/db.config.js');

require('./app/route/customer.route.js')(app);

//Create server
var server = app.listen(8081, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log("App listening to http//%s:%s", host, port);
});

