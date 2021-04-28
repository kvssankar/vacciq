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
  if (time.getHours() > user.slot.getHours() + 1)
    return { error: 1, mssg: `Missed your slot` };

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      $set: {
        queue_no: center.queue.length + 1,
        entry_time: time,
      },
    },
    { new: true }
  );
  return updatedUser;
};

// ,
//         estimated_time: new Date(
//           time.getTime() + center.queue.length * 5 * 60000
//         ),

const calculateEstimatedTime = async (center_name) => {
  const users = await User.find({ center: center_name });
  const center = await Center.find({ name: center_name });
};

const updateQ = async (center_name) => {
  const users = await User.find({ center: center_name });
  const center = await Center.find({ name: center_name });
};

const notify = async (notify_id, title, mssg) => {
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization:
        "key=AAAAckuxAaY:APA91bHfO45tMPaoCeWF6g2g3Ck6BWIdTgyIMqA2F9aAbDmO1RzuVunB5KkGXj_QLK1Wwiy8yGMsyUbvLsBPxVi09Pr5XUXMlRWseGvPmH9abS7eLJGdcqkRCc6yWzra-EbMmac1NJ-V",
    },
  };
  axios
    .post(
      "https://fcm.googleapis.com/fcm/send",
      {
        registration_ids: [notify_id],
        notification: {
          sound: "default",
          body: mssg,
          title: title,
          image: url,
          icon:
            "https://res.cloudinary.com/sankarkvs/image/upload/v1613555633/manager_prv1ox.png",
          content_available: true,
          priority: "high",
        },
        data: {
          sound: "default",
          body: mssg,
          title: title,
          image: url,
          icon:
            "https://res.cloudinary.com/sankarkvs/image/upload/v1613555633/manager_prv1ox.png",
          content_available: true,
          priority: "high",
        },
      },
      config
    )
    .then((res) => {
      document.location.reload();
    })
    .catch((err) => {
      alert("Something went wrong");
    });
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
