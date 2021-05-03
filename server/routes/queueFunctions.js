const { Queue } = require("../models/Queue");
const { User } = require("../models/User");
const verify = require("../verify");

const verify = async (req) => {
  const token = req.header("auth-token");
  if (!token) res.status(401).json({ mssg: "no token found", status: 1 });
  try {
    const verify = await jwt.verify(token, config.jwt_secret);
    return verify;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const dischargeQ = async (user_id) => {
  const user = await User.findByIdAndUpdate(user_id, {
    $set: { queue_no: -2, estimated_time: null },
  });
  const center = await Center.findOneAndUpdate(
    { name: user.center },
    { $pull: { queue: user_id } },
    { new: true }
  );
  for (var i = 0; i < center.queue.length; i++) {
    let user = await User.findByIdAndUpdate(center.queue[i], {
      $inc: { queue_no: -1 },
    });
    if (user.queue_no >= 15) {
      notify(user.notify_id);
    }
  }
};

module.exports = { addToQ };
