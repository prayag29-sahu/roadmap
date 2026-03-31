const mongoose = require('mongoose');
// MongoDB se connect karne ka function
const connectDB = async () => {
  try {
    // Localhost MongoDB URL. 'saas_roadmap' database ka naam hai jo auto-create ho jayega.
    const conn = await mongoose.connect('mongodb+srv://sb_stock:sb_stock_db4p@cluster0.niac4le.mongodb.net/Stock');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    // Agar connection fail ho jaye toh process exit kar do
    process.exit(1);
  }
};

module.exports = connectDB;