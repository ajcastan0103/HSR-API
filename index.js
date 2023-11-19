const express = require('express');
const characterRoutes = require('./routes/routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Honkai Star Rail API');
});

app.use('/api/v1/characters', characterRoutes);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
