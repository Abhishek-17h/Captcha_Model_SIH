const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Middlewares
app.use(express.json()); // For parsing JSON requests
app.use(cors()); // To allow requests from frontend

// Import Routes
const userRoutes = require('./routes/userRoutes');

// Routes Middleware
app.use('/', userRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('DB connection error: ', err));

// Define the PORT
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
