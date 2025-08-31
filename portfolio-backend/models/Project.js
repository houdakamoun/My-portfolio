const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: String,
    description: String,
    tech: [String],
    image: String,
    demoUrl: String,
    githubUrl: String,
    year: Number,
    category: {
      type: String,
      enum: ["web", "mobile", "design", "other"],
      default: "web",
    },
    featured: { type: Boolean, default: false },
    highlights: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
