// server.js - Entry point for the API server.
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON bodies

// Database connection
mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log mongoose queries
mongoose.set('debug', true);

// API routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
