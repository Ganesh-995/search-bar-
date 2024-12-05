const express = require('express');
const router = express.Router();

const data = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Ross' },
    { id: 4, name: 'Rachel Zane' }
];

// Search Route
router.post('/', (req, res) => {
    const query = req.body.searchdata ? req.body.searchdata.toLowerCase() : '';
    const results = data.filter(item => item.name.toLowerCase().includes(query));
    res.json(results); // Filtered results
});

module.exports = router;
