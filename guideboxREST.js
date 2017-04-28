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

// let watched = [
//    { id: 5,
//     title: 'Robo-Cow 5',
//     year_released: '2001-04-01',
//     director: 'Candy Harmon',
//     description: 'Another one bites the fender guitar.'
//   }
// ];
let watched = [{
  id: 7,
  Title: "The Big Lebowski",
  Year: "1998",
  Rated: "R",
  Released: "06 Mar 1998",
  Runtime: "117 min",
  Genre: "Comedy, Crime, Mystery",
  Director: "Joel Coen, Ethan Coen",
  Writer: "Ethan Coen, Joel Coen",
  Actors: "Jeff Bridges, John Goodman, Julianne Moore, Steve Buscemi",
  Plot: "\"The Dude\" Lebowski, mistaken for a millionaire Lebowski, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTFjMjBiYzItNzU5YS00MjdiLWJkOTktNDQ3MTE3ZjY2YTY5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  Metascore: "69",
  imdbRating: "8.2",
  imdbID: "tt0118715",
  rottentomatoes: "81%"
}];

test_movies_2 = [{
  id: 1,
  Title: "Fight Club",
  Year: "1999",
  Rated: "R",
  Released: "15 Oct 1999",
  Runtime: "139 min",
  Genre: "Drama",
  Director: "David Fincher",
  Writer: "Chuck Palahniuk (novel), Jim Uhls (screenplay)",
  Actors: "Edward Norton, Brad Pitt, Meat Loaf, Zach Grenier",
  Plot: "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  Metascore: "66",
  imdbRating: "8.8",
  imdbID: "tt0137523",
  rottentomatoes: "79%"
}, {
  id: 2,
  Title: "Rogue One",
  Year: "2016",
  Rated: "PG-13",
  Released: "16 Dec 2016",
  Runtime: "133 min",
  Genre: "Action, Adventure, Sci-Fi",
  Director: "Gareth Edwards",
  Writer: "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)",
  Actors: "Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen",
  Plot: "The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting up the epic saga to follow.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
  Metascore: "65",
  imdbRating: "8.0",
  imdbID: "tt3748528",
  rottentomatoes: "85%"
}, {
  id: 3,
  Title: "Split",
  Year: "2016",
  Rated: "PG-13",
  Released: "20 Jan 2017",
  Runtime: "117 min",
  Genre: "Horror, Thriller",
  Director: "M. Night Shyamalan",
  Writer: "M. Night Shyamalan",
  Actors: "James McAvoy, Anya Taylor-Joy, Betty Buckley, Haley Lu Richardson",
  Plot: "Three girls are kidnapped by a man with a diagnosed 23 distinct personalities, they must try to escape before the apparent emergence of a frightful new 24th.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg",
  Metascore: "62",
  imdbRating: "7.4",
  imdbID: "tt4972582",
  rottentomatoes: "75%"
}, {
  id: 4,
  Title: "Moana",
  Year: "2016",
  Rated: "PG",
  Released: "23 Nov 2016",
  Runtime: "107 min",
  Genre: "Animation, Adventure, Comedy",
  Director: "Ron Clements, Don Hall, John Musker, Chris Williams",
  Writer: "Jared Bush (screenplay), Ron Clements (story by), John Musker (story by), Chris Williams (story by), Don Hall (story by), Pamela Ribon (story by), Aaron Kandell (story by), Jordan Kandell (story by)",
  Actors: "Auli'i Cravalho, Dwayne Johnson, Rachel House, Temuera Morrison",
  Plot: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches an impetuous Chieftain's daughter's island, she answers the Ocean's call to seek out the Demigod to set things right.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_SX300.jpg",
  Metascore: "81",
  imdbRating: "7.7",
  imdbID: "tt3521164",
  rottentomatoes: "95%"
}, {
  id: 5,
  Title: "La La Land",
  Year: "2016",
  Rated: "PG-13",
  Released: "25 Dec 2016",
  Runtime: "128 min",
  Genre: "Comedy, Drama, Music",
  Director: "Damien Chazelle",
  Writer: "Damien Chazelle",
  Actors: "Ryan Gosling, Emma Stone, Amiée Conn, Terry Walters",
  Plot: "A jazz pianist falls for an aspiring actress in Los Angeles.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg",
  Metascore: "93",
  imdbRating: "8.3",
  imdbID: "tt3783958",
  rottentomatoes: "93%"
}, {
  id: 6,
  Title: "Jurassic World",
  Year: "2015",
  Rated: "PG-13",
  Released: "12 Jun 2015",
  Runtime: "124 min",
  Genre: "Action, Adventure, Sci-Fi",
  Director: "Colin Trevorrow",
  Writer: "Rick Jaffa (screenplay), Amanda Silver (screenplay), Colin Trevorrow (screenplay), Derek Connolly (screenplay), Rick Jaffa (story), Amanda Silver (story), Michael Crichton (characters)",
  Actors: "Chris Pratt, Bryce Dallas Howard, Irrfan Khan, Vincent D'Onofrio",
  Plot: "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, which escapes containment and goes on a killing spree.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5MTE0MTk3Nl5BMl5BanBnXkFtZTgwMjczMzk2NTE@._V1_SX300.jpg",
  Metascore: "59",
  imdbRating: "7.0",
  imdbID: "tt0369610",
  rottentomatoes: "71%"
}, {
  id: 7,
  Title: "The Big Lebowski",
  Year: "1998",
  Rated: "R",
  Released: "06 Mar 1998",
  Runtime: "117 min",
  Genre: "Comedy, Crime, Mystery",
  Director: "Joel Coen, Ethan Coen",
  Writer: "Ethan Coen, Joel Coen",
  Actors: "Jeff Bridges, John Goodman, Julianne Moore, Steve Buscemi",
  Plot: "\"The Dude\" Lebowski, mistaken for a millionaire Lebowski, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTFjMjBiYzItNzU5YS00MjdiLWJkOTktNDQ3MTE3ZjY2YTY5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  Metascore: "69",
  imdbRating: "8.2",
  imdbID: "tt0118715",
  rottentomatoes: "81%"
}, {
  id: 8,
  Title: "Memento",
  Year: "2000",
  Rated: "R",
  Released: "25 May 2001",
  Runtime: "113 min",
  Genre: "Mystery, Thriller",
  Director: "Christopher Nolan",
  Writer: "Christopher Nolan (screenplay), Jonathan Nolan (short story \"Memento Mori\")",
  Actors: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
  Plot: "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  Metascore: "80",
  imdbRating: "8.5",
  imdbID: "tt0209144",
  rottentomatoes: "92%"
}, {
  id: 9,
  Title: "Interstellar",
  Year: "2014",
  Rated: "PG-13",
  Released: "07 Nov 2014",
  Runtime: "169 min",
  Genre: "Adventure, Drama, Sci-Fi",
  Director: "Christopher Nolan",
  Writer: "Jonathan Nolan, Christopher Nolan",
  Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
  Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
  Metascore: "74",
  imdbRating: "8.6",
  imdbID: "tt0816692",
  rottentomatoes: "71%"
}];

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
