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
  password: { type: String },
  phone: { type: String },
  sex: { type: Number, default: 1 },
  center_id: { type: Schema.Types.ObjectId, ref: "queue", autopopulate: true },
  queue_id: { type: Schema.Types.ObjectId, ref: "queue", autopopulate: true },
  notify_id: String,
});

userSchema.plugin(require("mongoose-autopopulate"));
const User = mongoose.model("user", userSchema);

module.exports = { User };
