
// Auto-generated by AutoPilot on 29-07-2023 at 03:47:24


const express = require('express');
const router = express.Router();

// Route to return top 3 cities in Europe as an array
router.get('/euroCities', (req,res) => {
    let cities = ['London', 'Paris', 'Rome'];
    res.json(cities);
});

module.exports = router;