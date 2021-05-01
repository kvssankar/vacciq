const router = require("express").Router();
const config = require("../config");
const { User } = require("../models/User");
const { Queue } = require("../models/Queue");
const verify = require("../verify");

router.post("/details", async (req, res) => {
  const { qid, sankar } = req.body;
  console.log(sankar);
  const q = await Queue.findById(qid);
  console.log(q);
  res.json({ q: q });
});

router.post("/create", verify, async (req, res) => {
  const { name, limit, time } = req.body;
  const newQ = new Queue({ name, limit, time });
  const addedQ = await newQ.save();
  const userid = req.user._id;
  console.log(userid);
  console.log("working");
  if (!userid) return null;
  const user = await User.findByIdAndUpdate(
    userid,
    { $set: { center_id: addedQ._id } },
    { new: true }
  );
  return res.json({ user: user });
});

router.post("/add", verify, async (req, res) => {
  const { center_id } = req.body;
  const userid = req.user._id;
  if (!userid) return null;
  const exist = await User.findOne({ _id: userid, queue_id: center_id });
  if (exist) return res.json({ user: exist });
  const user = await User.findOne({ _id: userid });
  const center = await Queue.findByIdAndUpdate(center_id, {
    $push: { line: { user: userid } },
  });
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      $set: {
        queue_id: center_id,
      },
    },
    { new: true }
  );
  return res.json({ user: updatedUser });
});

router.post("/remove", verify, async (req, res) => {
  const { user_id, queue_id } = req.body;
  const ownerid = req.user._id;
  if (!ownerid) return null;
  let owner = await User.findOne({ _id: ownerid, center_id: queue_id });
  if (!owner) return null;
  const center = await Queue.findByIdAndUpdate(
    owner.center_id,
    { $pull: { "line.user": user_id } },
    { new: true }
  );
  const user = await User.findByIdAndRemove(user_id, {
    $set: { queue_id: null },
  });
  owner = await User.findOne({ _id: ownerid, center_id: queue_id });
  return res.json({ user: owner });
});

router.post("/view", async (req, res) => {
  const { queue_id } = req.body;
  const queue = await Queue.findById(queue_id);
  res.json({ queue: queue });
});

router.post("/delete", verify, async (req, res) => {
  const { center_id } = req.body;
  const ownerid = req.user._id;
  const owner = await User.findByIdAndUpdate(
    center_id,
    {
      $set: { center_id: null },
    },
    { new: true }
  );
  await Queue.findByIdAndDelete(center_id);
  res.json({ user: owner });
});

module.exports = router;
