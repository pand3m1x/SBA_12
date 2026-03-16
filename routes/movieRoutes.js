// GET /search: This will handle movie searches. [x]
// GET /movies/:id: This will fetch details for a specific movie. [x]

import express from 'express';
import {getMovies} from '../controllers/movieController.js'
import {getMoviesById} from '../controllers/movieController.js'

const router = express.Router();

router.get('/', (req,res) => 
  res.send(" ˙⋆✮🎞️ You can map your life through your favorite movies, and no two people's maps will be the same. — Mary Schmich 🎞️✮⋆˙"));

router.get('/search/:title', getMovies);

router.get('/movies/:id', getMoviesById);

// router.get('/test/:title', getMovies)

export default router