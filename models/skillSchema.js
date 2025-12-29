const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level:{ type: String, enum: ["beginner", "intermediate", "advanced"],},
    category:  { type: String, required: true },
    image: { type: String, required: true },
});

module.exports = mongoose.model("skill", userSchema);