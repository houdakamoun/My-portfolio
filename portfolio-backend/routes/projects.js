const express = require("express");
const Project = require("../models/Project.js"); // ton modèle mongoose

const router = express.Router();

// GET tous les projets
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET un projet par id
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ajouter un projet
router.post("/", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const saved = await newProject.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modifier un projet
router.put("/:id", async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Supprimer un projet
router.delete("/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Projet supprimé" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
