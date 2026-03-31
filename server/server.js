const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const phaseRoutes = require('./routes/services');

const app = express();

// Middleware setup
// CORS allow karta hai ki aapka frontend (Canvas/HTML) localhost server se communicate kar sake
app.use(cors());
// JSON data parse karne ke liye middleware
app.use(express.json());

// Database connect karein
connectDB();

app.get('/', (req, res) => {
  res.send('Backend is running perfectly! APIs are at /api/phases');
});

// API Routes setup karein
// Saare roadmap routes /api/phases se start honge
app.use('/api/phases', phaseRoutes);

// Server start karne ke liye port define karein
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server successfully port ${PORT} par chal raha hai`);
});