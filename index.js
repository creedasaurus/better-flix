let express = require('express');
let winston = require('winston');
let fs = require('fs');
let colors = require('colors');
colors.enabled = true;
let nconf = require('nconf');
nconf.argv()
  .env()
  .file({file:'config.json'});
const PORT = nconf.get("PORT");
const IP  = nconf.get("IP");

let logger = require('morgan');
let compression = require('compression');
let bodyParser = require('body-parser');
let rest = require("./guideboxREST");

let app = express();

app.disable('x-powered-by');

app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', rest.router);

winston.info(`Listening on port: ${PORT}`.cyan);

let server = app.listen(PORT, IP, function() {
  winston.info("Server is running...".green);
});
