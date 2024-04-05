// server.js - Entry point for the API server.
const express = require('express');
const userRoutes = require('./routes/apiRoutes/userRoutes');
const thoughtRoutes = require('./routes/apiRoutes/thoughtRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON bodies

// API routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
