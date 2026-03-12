// GET /search: This will handle movie searches. [x]
// GET /movies/:id: This will fetch details for a specific movie. [x]

import express from 'express';
import {getMovies} from '../controllers/movieController.js'
const router = express.Router();

router.get('/search', (req,res) => 
  res.send("The length of a film should be directly related to the endurance of the human bladder. — Alfred Hitchcock"));

router.get('/movies/:id', (req,res) => 
  res.send("A film is - or should be - more like music than like fiction. It should be a progression of moods and feelings. — Stanley Kubrick"));

router.get('/test/:title', getMovies)

export default router