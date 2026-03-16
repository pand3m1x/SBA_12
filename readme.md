This is my API movie readme

Use the search plus title to pull up a variety of movies in that keyword
ie:

  /search/:title => /search/batman

  should get you a bunch of Batman movies

From the list, you can find the id, with the id, you can use: /movies/:id to 
get specific information about a movie that catches your interest. 

    {
      "Title": "The Lego Batman Movie",
      "Year": "2017",
      "imdbID": "tt4116284", <= the id
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
    }

Excellent movie choice. 

  /movies/:id => /movies/tt4116284

Will get you title, release date, actors, director, etc.

Enjoy