const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: { type: String, required: false },
    tech: { type: String, required: false },
    gitlink: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Projects", projectSchema);
