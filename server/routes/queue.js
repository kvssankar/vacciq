const router = require("express").Router();
const config = require("../config");
const { User } = require("../models/User");
const { Queue } = require("../models/Queue");
const verify = require("../verify");

router.post("/create", verify, async (req, res) => {
  const { name, limit, line, time } = req;
  const newQ = new Queue({ name, limit, line, time });
  const addedQ = await newQ.save();
  const userid = req.user;
  if (!userid) return null;
  const user = await User.findByIdAndUpdate(
    userid,
    { $set: { center_id: addedQ._id } },
    { new: true }
  );
  return { user: user };
});

router.post("/add", verify, async (req, res) => {
  const { center_id } = req;
  const userid = req.user;
  if (!userid) return null;
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
  return { user: updatedUser };
});

router.post("/remove", verify, async (req, res) => {
  const { user_id, queue_id } = req;
  const ownerid = req.user;
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
  return { user: owner };
});

router.post("/view", async (req, res) => {
  const { queue_id } = req;
  const queue = await Queue.findById(queue_id);
  res.json({ queue: queue });
});

router.post("/delete", verify, async (req, res) => {
  const { center_id } = req;
  const ownerid = req.user;
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
