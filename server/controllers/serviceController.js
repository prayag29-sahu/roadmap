const Phase = require('../models/TimeSlot');

// 1. Specific Phase ka progress aur status update karne ka function
const updatePhaseProgress = async (req, res) => {
  try {
    const { id } = req.params; // URL se phaseId milega (e.g., /api/phases/phase-1)
    const { progress, status } = req.body; // Frontend se bheja gaya naya data

    // Database mein phase dhundho aur update karo (upsert: true add kiya hai taaki naya record ban sake)
    const updatedPhase = await Phase.findOneAndUpdate(
      { phaseId: id },
      { progress, status, title: req.body.title }, // title bhi save kar lenge
      { new: true, runValidators: true, upsert: true } // <-- yahan upsert: true zaroori hai
    );

    if (!updatedPhase) {
      return res.status(404).json({ message: "Phase database mein nahi mila" });
    }

    res.status(200).json({
      message: "Phase successfully update ho gaya",
      data: updatedPhase
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// 2. Dashboard load hone par saare phases fetch karne ka function
const getAllPhases = async (req, res) => {
  try {
    const phases = await Phase.find({});
    res.status(200).json(phases);
  } catch (error) {
    res.status(500).json({ message: "Server error fetch karne mein", error: error.message });
  }
};

module.exports = {
  updatePhaseProgress,
  getAllPhases
};