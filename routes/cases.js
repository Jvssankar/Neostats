const express = require("express");
const router = express.Router();
const Case = require("../models/Case");

function generateTrackingId(count) {
  const year = new Date().getFullYear();
  return `NEO-${year}-${String(count + 1).padStart(3, "0")}`;
}

router.post("/submit", async (req, res) => {
  try {
    const count = await Case.countDocuments();
    const trackingId = generateTrackingId(count);

    const newCase = new Case({
      trackingId,
      category: req.body.category,
      department: req.body.department,
      location: req.body.location,
      severity: req.body.severity
    });

    await newCase.save();

    res.json(newCase);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/all", async (req, res) => {
  const cases = await Case.find();
  res.json(cases);
});

router.post("/assign/:id", async (req, res) => {
  const updated = await Case.findByIdAndUpdate(
    req.params.id,
    {
      assignedTo: req.body.managerId,
      status: "Assigned"
    },
    { new: true }
  );

  res.json(updated);
});

router.post("/status/:id", async (req, res) => {
  const updated = await Case.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(updated);
});

router.post("/respond/:id", async (req, res) => {
  const updated = await Case.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        responses: {
          message: req.body.message
        }
      }
    },
    { new: true }
  );

  res.json(updated);
});
router.get("/analytics", async (req, res) => {

  const byDepartment = await Case.aggregate([
    {
      $group: {
        _id: "$department",
        count: { $sum: 1 }
      }
    }
  ]);

  const byCategory = await Case.aggregate([
    {
      $group: {
        _id: "$category",
        count: { $sum: 1 }
      }
    }
  ]);

  res.json({
    department: byDepartment,
    category: byCategory
  });
});
module.exports = router;