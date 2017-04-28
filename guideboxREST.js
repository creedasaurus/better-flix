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
];

let test_movies_2 = [{
  id: 139472,
  title: "Rogue One: A Star Wars Story",
  imdb: "tt3748528",
  release_date: "2016-12-14",
  rating: "PG-13",
  rottentomatoes: 771415158,
  wikipedia_id: 44217612,
  metacritic: "http:\/\/www.metacritic.com\/movie\/rogue-one",
  poster_120x171: "http:\/\/static-api.guidebox.com\/111615\/thumbnails_movies_small\/139472-6444605295-3758796593-8504363601-small-120x171-alt-.jpg",
  poster_240x342: "http:\/\/static-api.guidebox.com\/111615\/thumbnails_movies_medium\/139472-6552252509-6160364053-3411255749-medium-240x342-alt-.jpg",
  poster_400x570: "http:\/\/static-api.guidebox.com\/111615\/thumbnails_movies\/-alt--139472-520674694-5391552430-7865828387-large-400x570-alt-.jpg"
}, {
  id: 150431,
  title: "Split",
  imdb: "tt4972582",
  release_date: "2017-01-19",
  rating: "PG-13",
  rottentomatoes: 771432610,
  wikipedia_id: 48764126,
  metacritic: "http:\/\/www.metacritic.com\/movie\/split",
  poster_120x171: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies_small\/150431-8385831802-198456990-2880453305-small-120x171-alt-.jpg",
  poster_240x342: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies_medium\/150431-989443558-7370135900-4013909730-medium-240x342-alt-.jpg",
  poster_400x570: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies\/-alt--150431-3274878981-1836863086-3055998078-large-400x570-alt-.jpg"
}, {
  id: 130292,
  title: "War Room",
  imdb: "tt4405668",
  release_date: "2015-08-28",
  rating: "PG",
  rottentomatoes: 771413235,
  wikipedia_id: 45540241,
  metacritic: "http:\/\/www.metacritic.com\/movie\/war-room",
  poster_120x171: "http:\/\/static-api.guidebox.com\/060515\/thumbnails_movies_small\/130292-5750904274-9731095284-2122397563-small-120x171-alt-.jpg",
  poster_240x342: "http:\/\/static-api.guidebox.com\/060515\/thumbnails_movies_medium\/130292-1141974368-8875474711-2946272376-medium-240x342-alt-.jpg",
  poster_400x570: "http:\/\/static-api.guidebox.com\/060515\/thumbnails_movies\/-alt--130292-812585331-5672315396-2592170057-large-400x570-alt-.jpg"
}, {
  id: 143442,
  title: "Sing",
  imdb: "tt3470600",
  release_date: "2016-11-23",
  rating: "PG",
  rottentomatoes: 771434221,
  wikipedia_id: 47415762,
  metacritic: "http:\/\/www.metacritic.com\/movie\/sing",
  poster_120x171: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies_small\/143442-6406127447-9196517081-960917864-small-120x171.jpg",
  poster_240x342: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies_medium\/143442-4780924805-2656850810-7933440194-medium-240x342.jpg",
  poster_400x570: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies\/-143442-9534959495-9127518967-101791034-large-400x570.jpg"
}, {
  id: 137646,
  title: "Fantastic Beasts and Where to Find Them",
  imdb: "tt3183660",
  release_date: "2016-11-16",
  rating: "PG-13",
  rottentomatoes: 771364505,
  wikipedia_id: 47569084,
  metacritic: "http:\/\/www.metacritic.com\/movie\/fantastic-beasts-and-where-to-find-them",
  poster_120x171: "http:\/\/static-api.guidebox.com\/111615\/thumbnails_movies_small\/137646-6023659864-8654526956-3587403358-small-120x171-alt-.jpg",
  poster_240x342: "http:\/\/static-api.guidebox.com\/111615\/thumbnails_movies_medium\/137646-2060908769-7989429030-1083444497-medium-240x342-alt-.jpg",
  poster_400x570: "http:\/\/static-api.guidebox.com\/111615\/thumbnails_movies\/-alt--137646-1952398969-3746234500-6692491001-large-400x570-alt-.jpg"
}, {
  id: 151125,
  title: "Aftermath",
  imdb: "tt4581576",
  release_date: "2017-04-07",
  rating: "R",
  rottentomatoes: 771434002,
  wikipedia_id: 48522246,
  metacritic: "http:\/\/www.metacritic.com\/movie\/aftermath",
  poster_120x171: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies_small\/151125-6284798821-8442281074-1761484980-small-120x171-alt-.jpg",
  poster_240x342: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies_medium\/151125-7861533407-8336852481-3441151674-medium-240x342-alt-.jpg",
  poster_400x570: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies\/-alt--151125-9930032901-4702814110-8922441303-large-400x570-alt-.jpg"
}, {
  id: 149259,
  title: "Sleepless",
  imdb: "tt2072233",
  release_date: "2017-01-12",
  rating: "R",
  rottentomatoes: 771434238,
  wikipedia_id: 47145807,
  metacritic: "http:\/\/www.metacritic.com\/movie\/sleepless",
  poster_120x171: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies_small\/149259-2238817816-1046253965-9144406672-small-120x171.jpg",
  poster_240x342: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies_medium\/149259-7868785960-6408922006-3985054139-medium-240x342.jpg",
  poster_400x570: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies\/-149259-1004076172-6502691097-257728752-large-400x570.jpg"
}, {
  id: 138745,
  title: "Moana",
  imdb: "tt3521164",
  release_date: "2016-11-23",
  rating: "NR",
  rottentomatoes: 771400848,
  wikipedia_id: 44164132,
  metacritic: "http:\/\/www.metacritic.com\/movie\/moana",
  poster_120x171: "http:\/\/static-api.guidebox.com\/111615\/thumbnails_movies_small\/138745-7276277733-3837612793-8356914371-small-120x171-alt-.jpg",
  poster_240x342: "http:\/\/static-api.guidebox.com\/111615\/thumbnails_movies_medium\/138745-5205454747-5570307914-6039644568-medium-240x342-alt-.jpg",
  poster_400x570: "http:\/\/static-api.guidebox.com\/111615\/thumbnails_movies\/-alt--138745-8130507017-6592284851-8482064157-large-400x570-alt-.jpg"
}, {
  id: 148278,
  title: "La La Land",
  imdb: "tt3783958",
  release_date: "2016-09-12",
  rating: "PG-13",
  rottentomatoes: 771418254,
  wikipedia_id: 47204682,
  metacritic: "http:\/\/www.metacritic.com\/movie\/la-la-land",
  poster_120x171: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies_small\/148278-1685685101-5262870542-4616542598-small-120x171-alt-.jpg",
  poster_240x342: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies_medium\/148278-8533278610-4522367958-8490341259-medium-240x342-alt-.jpg",
  poster_400x570: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies\/-alt--148278-3868838921-6763798967-6545559456-large-400x570-alt-.jpg"
}, {
  id: 150966,
  title: "The Void",
  imdb: "tt4255304",
  release_date: "2017-04-07",
  rating: "NR",
  rottentomatoes: 771450565,
  wikipedia_id: 53679248,
  metacritic: "http:\/\/www.metacritic.com\/movie\/the-void",
  poster_120x171: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies_small\/150966-3096668436-422408432-7662479505-small-120x171-alt-.jpg",
  poster_240x342: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies_medium\/150966-8914359887-7309348052-6299513276-medium-240x342-alt-.jpg",
  poster_400x570: "http:\/\/static-api.guidebox.com\/091716\/thumbnails_movies\/-alt--150966-794076468-7348444075-8260662104-large-400x570-alt-.jpg"
}]

router.get('/new/movies.json', function (req, res) {
  winston.info('Getting all the films'.green);
  let resp_movies = test_movies_2.filter(function (movie) {
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
