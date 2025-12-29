const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level:{ type: String, enum: ["beginner", "intermediate", "advanced"],},
    category:  { type: String, required: true },
    image: { type: String},
});

module.exports = mongoose.model("skill", skillSchema);