const express = require('express');
const router = express.Router();
const { updatePhaseProgress, getAllPhases } = require('../controllers/serviceController');

// GET request: Frontend (Canvas) par saare phases display karne ke liye
router.get('/', getAllPhases);

// PUT request: Specific phase ka progress update karne ke liye (frontend se fetch API call hoga yahan)
router.put('/:id', updatePhaseProgress);

module.exports = router;