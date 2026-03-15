const express = require("express");
const router = express.Router();
const Poll = require("../models/Poll");

router.post("/create", async (req, res) => {
  const { question, options } = req.body;

  const votes = options.map(() => 0);

  const poll = new Poll({
    question,
    options,
    votes
  });

  await poll.save();

  res.json(poll);
});

router.get("/all", async (req, res) => {
  const polls = await Poll.find();
  res.json(polls);
});

router.post("/vote/:id", async (req, res) => {
  const { optionIndex, user } = req.body;

  const poll = await Poll.findById(req.params.id);

  if (poll.voters.includes(user)) {
    return res.json({ message: "Already voted" });
  }

  poll.votes[optionIndex] += 1;
  poll.voters.push(user);

  await poll.save();

  res.json(poll);
});

module.exports = router;