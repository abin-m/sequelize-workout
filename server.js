
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Use the user routes
app.use('/api', userRoutes);

// Synchronize all models with the database
sequelize.sync()
    .then(() => {
        console.log('Database synchronized');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error synchronizing the database:', err);
    });

    