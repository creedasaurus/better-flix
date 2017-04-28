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

test_movies = [{
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
  rottentomatoes: "79%",
  Type: "movie"
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
  rottentomatoes: "85%",
  Type: "movie"
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
  rottentomatoes: "75%",
  Type: "movie"
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
  rottentomatoes: "95%",
  Type: "movie"
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
  rottentomatoes: "93%",
  Type: "movie"
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
  rottentomatoes: "71%",
  Type: "movie"
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
  rottentomatoes: "81%",
  Type: "movie"
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
  rottentomatoes: "92%",
  Type: "movie"
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
  rottentomatoes: "71%",
  Type: "movie"
}, {
  id: 10,
  Title: "Lost",
  Year: "2004–2010",
  Rated: "TV-14",
  Released: "22 Sep 2004",
  Runtime: "44 min",
  Genre: "Adventure, Drama, Fantasy",
  Director: "N/A",
  Writer: "J.J. Abrams, Jeffrey Lieber, Damon Lindelof",
  Actors: "Jorge Garcia, Josh Holloway, Yunjin Kim, Evangeline Lilly",
  Plot: "The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NzMyMzU1MV5BMl5BanBnXkFtZTcwNjc1ODUwMg@@._V1_SX300.jpg",
  Metascore: "N/A",
  imdbRating: "8.4",
  imdbID: "tt0411008",
  rottentomatoes: "N/A",
  Type: "series"
}, {
  id: 11,
  Title: "Silicon Valley",
  Year: "2014–",
  Rated: "TV-MA",
  Released: "06 Apr 2014",
  Runtime: "28 min",
  Genre: "Comedy",
  Director: "N/A",
  Writer: "John Altschuler, Mike Judge, Dave Krinsky",
  Actors: "Thomas Middleditch, T.J. Miller, Josh Brener, Martin Starr",
  Plot: "Follows the struggle of Richard Hendricks, a silicon valley engineer trying to build his own company called Pied Piper",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTA4MTE3MTQwMF5BMl5BanBnXkFtZTgwNzk4MTg4MTI@._V1_SX300.jpg",
  Metascore: "N/A",
  imdbRating: "8.5",
  imdbID: "tt2575988",
  rottentomatoes: "98%",
  Type: "series"
}, {
  id: 12,
  Title: "Fargo",
  Year: "2014–",
  Rated: "TV-MA",
  Released: "15 Apr 2014",
  Runtime: "53 min",
  Genre: "Crime, Drama, Thriller",
  Director: "Noah Hawley",
  Writer: "Noah Hawley",
  Actors: "Allison Tolman, Colin Hanks, Martin Freeman, Billy Bob Thornton",
  Plot: "Various chronicles of deception, intrigue and murder in and around frozen Minnesota. Yet all of these tales mysteriously lead back one way or another to Fargo, ND.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNmNiNDc4MzQtNjFmMC00MzQ1LTkyZjUtODMxN2UyMmYxZmFmXkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_SX300.jpg",
  Metascore: "N/A",
  imdbRating: "9.0",
  imdbID: "tt2802850",
  rottentomatoes: "98%",
  Type: "series"
}, {
  id: 13,
  Title: "True Detective",
  Year: "2014–",
  Rated: "TV-MA",
  Released: "12 Jan 2014",
  Runtime: "55 min",
  Genre: "Crime, Drama, Mystery",
  Director: "N/A",
  Writer: "Nic Pizzolatto",
  Actors: "Matthew McConaughey, Colin Farrell, Woody Harrelson, Rachel McAdams",
  Plot: "An anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTMwODI1OV5BMl5BanBnXkFtZTgwMDIzMTQ0NTE@._V1_SX300.jpg",
  Metascore: "N/A",
  imdbRating: "9.1",
  imdbID: "tt2356777",
  rottentomatoes: "75%",
  Type: "series"
}, {
  id: 14,
  Title: "The Office",
  Year: "2005–2013",
  Rated: "TV-PG",
  Released: "24 Mar 2005",
  Runtime: "22 min",
  Genre: "Comedy",
  Director: "N/A",
  Writer: "Greg Daniels, Ricky Gervais, Stephen Merchant",
  Actors: "Rainn Wilson, John Krasinski, Jenna Fischer, Leslie David Baker",
  Plot: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium. Based on the hit BBC series.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzNjAzMDE0NF5BMl5BanBnXkFtZTcwNTEyMzM3OA@@._V1_SX300.jpg",
  Metascore: "N/A",
  imdbRating: "8.8",
  imdbID: "tt0386676",
  rottentomatoes: "N/A",
  Type: "series"
}, {
  id: 15,
  Title: "Game of Thrones",
  Year: "2011–",
  Rated: "R",
  Released: "17 Apr 2011",
  Runtime: "56 min",
  Genre: "Adventure, Drama, Fantasy",
  Director: "N/A",
  Writer: "David Benioff, D.B. Weiss",
  Actors: "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
  Plot: "Nine noble families fight for control over the mythical lands of Westeros; A forgotten race returns after being dormant for thousands of years.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwOTcxODc2Ml5BMl5BanBnXkFtZTgwMjMyMDk2MTI@._V1_SX300.jpg",
  Metascore: "N/A",
  imdbRating: "9.5",
  imdbID: "tt0944947",
  rottentomatoes: "95%",
  Type: "series"
}, {
  id: 16,
  Title: "Parks and Recreation",
  Year: "2009–2015",
  Rated: "TV-PG",
  Released: "09 Apr 2009",
  Runtime: "22 min",
  Genre: "Comedy",
  Director: "N/A",
  Writer: "Greg Daniels, Michael Schur",
  Actors: "Amy Poehler, Nick Offerman, Aubrey Plaza, Chris Pratt",
  Plot: "The absurd antics of an Indiana town's public officials as they pursue sundry projects to make their city a better place.",
  Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MjUxNDgwNF5BMl5BanBnXkFtZTgwMDI5NjMwNDE@._V1_SX300.jpg",
  Metascore: "N/A",
  imdbRating: "8.6",
  imdbID: "tt1266020",
  rottentomatoes: "90%",
  Type: "series"
}];

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
  rottentomatoes: "81%",
  Type: "movie"
}];

router.get('/new/movies.json', function (req, res) {
  winston.info('Getting all the films'.green);
  let resp_movies = test_movies.filter(function (movie) {
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
