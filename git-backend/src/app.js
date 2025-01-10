const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./db");
const githubRoutes = require("./routes/githubRoutes");

const app = express();
const PORT = 3000;

require('dotenv').config(); 

// Middleware
app.use(bodyParser.json());
app.use("/api", githubRoutes);

app.get('/api/data', (req, res) => {
    const token = process.env.API_SECRET_KEY;  // Accessing the secret from .env

    if (!token) {
        return res.status(500).json({ message: 'API token is missing' });
    }

    // Example API request using token (for demonstration purposes)
    axios
        .get('https://someapi.com/data', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'API request failed' });
        });
});


// Initialize database and start server
sequelize.sync().then(() => {
  console.log("Database synced successfully.");
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
});
