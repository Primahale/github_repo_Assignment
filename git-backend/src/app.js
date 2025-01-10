const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./db");
const githubRoutes = require("./routes/githubRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use("/api", githubRoutes);

// Initialize database and start server
sequelize.sync().then(() => {
  console.log("Database synced successfully.");
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
});
