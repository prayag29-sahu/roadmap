const mongoose = require('mongoose');

// Roadmap phase ka structure define kar rahe hain
const phaseSchema = new mongoose.Schema({
  phaseId: {
    type: String,
    required: true,
    unique: true // Jaise: 'phase-1', 'pre-phase-cleaner'
  },
  title: {
    type: String,
    required: true
  },
  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100 // Progress 0 se 100% ke beech hi rahega
  },
  status: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'In Progress', 'Complete', 'Incomplete'] // Sirf yahi status allow honge
  }
}, { timestamps: true }); // timestamps auto created_at aur updated_at add kar dega

module.exports = mongoose.model('Phase', phaseSchema);