const { Center } = require("../models/Center");
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

const addToQ = async (token, center_name, time) => {
  const userid = await verify(token);
  const user = await User.findOne({ _id: userid, center: center_name });
  if (!user)
    return { error: 1, mssg: `Not this center, your center is ${user.center}` };
  const center = await Center.findOne({ name: center_name });
  if (time > user.slot.getHours() + 1)
    return { error: 1, mssg: `Missed your slot` };

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      $set: {
        queue_no: center.queue.length + center.per_slot,
        entry_time: time,
        estimated_time: time,
      },
    },
    { new: true }
  );
  return updatedUser;
};

module.exports = { addToQ };
