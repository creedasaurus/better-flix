let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');
let winston = require('winston');
let colors = require('colors');
colors.enabled = true;
let router = express.Router();
let nconf = require('nconf');
nconf.argv()
  .env()
  .file({file: 'config.json'});

router.use(bodyParser.json());

let Guidebox = require('guidebox')(nconf.get('API_KEY'));

router.get('/movies.json', function(req, res) {
  winston.info('Getting all the films'.green);
  res.status(200).json({"fart": "this is a fart"});
});

module.exports = {
  'router': router
};
