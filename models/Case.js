const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const caseSchema = new mongoose.Schema({
  trackingId: {
    type: String,
    required: true,
    unique: true
  },
  category: String,
  department: String,
  location: String,
  severity: {
    type: String,
    enum: ["Low", "Medium", "High"]
  },
  status: {
    type: String,
    enum: [
      "New",
      "Assigned",
      "In Progress",
      "Pending",
      "Resolved",
      "Escalated"
    ],
    default: "New"
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  responses: [responseSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Case", caseSchema);