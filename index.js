const express = require('express');
const characterRoutes = require('./src/characters/routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Honkai Star Rail API');
});

app.use('/api/v1/characters', characterRoutes);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
