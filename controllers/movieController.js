// searchMovies function []
// GET /api/search []
// getMovieDetails []

import express from 'express';

const axios = require('axios');
 
const movieClient = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    // Note: In a real app, this token would come from an environment variable!
    'Authorization': 'token YOUR_PERSONAL_ACCESS_TOKEN'
  }
});
 
module.exports = movieClient;

// http://www.omdbapi.com/?i=tt3896198&apikey=

// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
// https://dev.to/spyke/making-api-calls-from-nodejs-3mfk