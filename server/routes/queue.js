const router = require("express").Router();
const config = require("../config");
const { User } = require("../models/User");
const { Queue } = require("../models/Queue");
const verify = require("../verify");
const axios = require("axios");

router.post("/details", async (req, res) => {
  const { qid } = req.body;
  const q = await Queue.findById(qid);
  res.json({ q: q.name });
});

router.post("/create", verify, async (req, res) => {
  const { name, limit, time } = req.body;
  const newQ = new Queue({ name, limit, time });
  const addedQ = await newQ.save();
  const userid = req.user._id;
  if (!userid) return res.status(400).json({ mssg: "Something went wrong" });
  const user = await User.findByIdAndUpdate(
    userid,
    { $set: { center_id: addedQ._id } },
    { new: true }
  );
  return res.json({ user: user });
});

router.post("/remove", verify, async (req, res) => {
  const { user_id, queue_id } = req.body;
  const ownerid = req.user._id;
  if (!ownerid) return null;
  let owner = await User.findOne({ _id: ownerid, center_id: queue_id });
  const center = await Queue.findByIdAndUpdate(
    queue_id,
    { $pull: { line: { user: user_id } } },
    { new: true }
  )
    .populate("line.user")
    .exec();
  const user = await User.findByIdAndUpdate(user_id, {
    $set: { queue_id: null },
  });
  owner = await User.findOne({ _id: ownerid, center_id: queue_id });
  return res.json({ user: owner, queue: center });
});

router.post("/getq", async (req, res) => {
  const { queue_id } = req.body;
  const queue = await Queue.findById(queue_id).populate("line.user").exec();
  res.json({ queue: queue });
});

router.post("/exitq", verify, async (req, res) => {
  const { queue_id } = req.body;
  const user = await User.findByIdAndUpdate(
    queue_id,
    {
      $set: { queue_id: null },
    },
    { new: true }
  );
  var diffMs = new Date() - user.enter;
  var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
  await Queue.findByIdAndUpdate(
    queue_id,
    { $pull: { line: { user: user_id } }, $inc: { time: diffMins, n: 1 } },
    { new: true }
  );
  res.json({ user });
});

module.exports = router;
