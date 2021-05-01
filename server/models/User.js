const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
  dp: {
    type: String,
    default:
      "https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg",
  },
  email: String,
  name: String,
  password: { type: String, required: true },
  phone: { type: Number },
  center_id: { type: Schema.Types.ObjectId, ref: "queue" },
  queue_id: { type: Schema.Types.ObjectId, ref: "queue" },
  notify_id: String,
});

const User = mongoose.model("user", userSchema);

module.exports = { User };
