// searchMovies function []
// GET /api/search []
// getMovieDetails []

import axios from 'axios';
import "dotenv/config"

const movieClient = axios.create({
  baseURL: "http://www.omdbapi.com/"
})


export async function getMovies(req, res) {
  const title=req.params.title
  // http://www.omdbapi.com/?t=Atlantis%3A+The+Lost+Empire&y=2001
  
  try {

    const response = await movieClient.get(`?apikey=${process.env.OMDB_API_KEY}&s=${title}`); //  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);

    res.json(response.data);
  } catch (error) {
      if (error.response) {
        console.error("Network Error:", error.message);
        res.status(500).json({ message: "A network error occurred." });
      }
  
    
};
}

 
// module.exports = movieClient;

// http://www.omdbapi.com/?i=tt3896198&apikey=

// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
// https://dev.to/spyke/making-api-calls-from-nodejs-3mfk


//              ෴⚘⎧ᴿᴵᴾ⎫⚘෴ ෴⚘⎧ᴿᴵᴾ⎫⚘෴ ෴⚘⎧ᴿᴵᴾ⎫⚘෴ ෴⚘⎧ᴿᴵᴾ⎫⚘෴ ෴⚘⎧ᴿᴵᴾ⎫⚘෴ ෴⚘⎧ᴿᴵᴾ⎫⚘෴


// import OMDB_API_KEY from '../config.js'

// const app = express(); should be handeled on Server.js
// const port = process.env.PORT || 1995; should be handeled on Server.js
 
// const movieClient = axios.create({
//   baseURL: 'http://www.omdbapi.com/',
//   headers: {
//     'Accept': 'application/vnd.github.v3+json',
//     // Note: In a real app, this token would come from an environment variable!
//     'Authorization': 'token ' + process.env.OMDB_API_KEY
//   }
// });
// res.send(id)
    /*
    // make a request to a external api
    const response = await movieClient.get("/movies/"+id); //  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    //console.log(response.data);
    //keep only the properties and values we need
    // const transformedData = response.data.map((user) => ({
    //   fact:user.text
    // }));

    const text = {
      fact: response.data.text,
    };

    console.log(text);

    res.json(text);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("API Error:", error.response.status, error.response.data);
      res
        .status(error.response.status)
        .json({ message: "Error fetching data from external API." });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Network Error:", error.message);
      res.status(500).json({ message: "A network error occurred." });
    }
  } */