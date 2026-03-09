import express from 'express';
import movieRoutes from './routes/movieRoutes.js'
import "dotenv/config"

// require('dotenv').config(); type for js not module

const app = express();
// const movieRoutes = require('./routes/movieRoutes'); can't have both either Import (module) or Const
app.use('/api', movieRoutes);

const PORT = process.env.PORT || 1995;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));