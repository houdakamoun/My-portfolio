const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const projectRoutes = require("./routes/projects.js"); // routes projets

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connexion MongoDB (une seule fois ici)
mongoose
  .connect("mongodb://127.0.0.1:27017/mondb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connecté"))
  .catch((err) => console.error("❌ MongoDB erreur:", err));

// Routes
app.use("/api/projects", projectRoutes);

// Démarrage serveur
const PORT = 5000; // Angular appelle localhost:5000
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
