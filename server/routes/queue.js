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
  const { name, limit, time, longitude, latitude } = req.body;
  const newQ = new Queue({ name, limit, time });
  const addedQ = await newQ.save();
  const userid = req.user._id;
  if (!userid) return res.status(400).json({ mssg: "Something went wrong" });
  const user = await User.findByIdAndUpdate(
    userid,
    { $set: { center_id: addedQ._id, latitude, longitude } },
    { new: true }
  );
  return res.json({ user: user });
});

router.post("/remove", verify, async (req, res) => {
  const { user_id, queue_id } = req.body;
  const user = await User.findByIdAndUpdate(
    user_id,
    {
      $set: { queue_id: null },
    },
    { new: true }
  );
  var diffMs = new Date() - user.enter;
  var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
  const queue = await Queue.findByIdAndUpdate(
    queue_id,
    { $pull: { line: { user: user_id } }, $inc: { time: diffMins, n: 1 } },
    { new: true }
  );
  return res.json({ queue, user });
});

router.post("/getq", async (req, res) => {
  const { queue_id } = req.body;
  console.log(queue_id);
  const queue = await Queue.findById(queue_id).populate("line.user").exec();
  res.json({ queue: queue });
});

router.post("/addq", verify, async (req, res) => {
  const { qname } = req.body;
  const queue = await new Queue({ name: qname }).save();
  const user_id = req.user._id;
  const queue_id = queue._id;
  const user = await User.findByIdAndUpdate(
    user_id,
    {
      $push: { myqueues: queue_id },
      $set: { center_id: queue_id },
    },
    { new: true }
  )
    .populate("myqueues")
    .exec();

  return res.json({ queue, user });
});

router.post("/setq", verify, async (req, res) => {
  const { queue_id } = req.body;
  const user_id = req.user._id;
  const user = await User.findByIdAndUpdate(
    user_id,
    { $set: { center_id: queue_id } },
    { new: true }
  )
    .populate("myqueues")
    .exec();
  const queue = await Queue.findById(queue_id);
  return res.json({ user, queue });
});

router.get("/getall", verify, async (req, res) => {
  const user = await User.findById(req.user._id).populate("myqueues").exec();
  res.json({ user });
});

module.exports = router;
