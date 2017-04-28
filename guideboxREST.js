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

// let Guidebox = require('guidebox')(nconf.get('API_KEY'));


let test_movies_1 = [
  { id: 1,
    title: 'Slappy Tap Dance',
    year_released: '1998-04-04',
    director: 'Hanz Zimmer',
    description: 'This is such a great movie. Go and check out the latest thing.'
  },
  { id: 2,
    title: 'The itchy and scratchy Show',
    year_released: '1991-05-11',
    director: 'That one guy',
    description: 'Best show of all time. Go see some things.'
  },
  { id: 3,
    title: 'Rude Booty',
    year_released: '2010-01-01',
    director: 'Great Guy',
    description: 'One heck of a wow.'
  },
  { id: 4,
    title: 'A credit company',
    year_released: '1959-03-10',
    director: 'Candy Harmon',
    description: 'Chowder Haws is amazing in this.'
  },
  { id: 5,
    title: 'Robo-Cow 5',
    year_released: '2001-04-01',
    director: 'Candy Harmon',
    description: 'Another one bites the fender guitar.'
  },
  { id: 6,
    title: 'Roxberries',
    year_released: '2014-01-10',
    director: 'Dung Harmon',
    description: 'I cant stand up after this'
  },
  { id: 7,
    title: 'Poetry Tang',
    year_released: '1983-08-01',
    director: 'Buzz Dude',
    description: 'There aint a movie in the world as good'
  }
];

let watched = [
   { id: 5,
    title: 'Robo-Cow 5',
    year_released: '2001-04-01',
    director: 'Candy Harmon',
    description: 'Another one bites the fender guitar.'
  }
]

router.get('/new/movies.json', function (req, res) {
  winston.info('Getting all the films'.green);
  let resp_movies = test_movies_1.filter(function (movie) {
    return watched.map(x => x.id).indexOf(movie.id) === -1;
  });
  res.status(200).json(resp_movies);
});

router.get('/my/movies.json', function (req, res) {
  winston.info('Getting my watched movies'.green);
  res.status(200).json(watched);
});

router.post('/watched', function (req, res) {
  console.log(req.body);
  res.status(200).json({"gotit":1});
});

module.exports = {
  'router': router
};
