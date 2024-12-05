const express = require('express');
const bodyParser = require('body-parser');
const searchRoutes = require('./routes/search');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files like index.html

app.use('/search', searchRoutes); // Mount search route

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
