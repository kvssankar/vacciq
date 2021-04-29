const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const centerSchema = new Schema({
  dp: {
    type: String,
    default:
      "https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg",
  },
  name: { type: String },
  password: { type: String, required: true },
  address: { type: String },
  phone: { type: Number },
  per_slot: { type: Number, default: 20 },
  queue: [{ type: Schema.Types.ObjectId, ref: "user", autopopulate: true }],
  esitimated_time: { type: String },
  limit: { type: Number, default: 5 },
});

centerSchema.plugin(require("mongoose-autopopulate"));
const Center = mongoose.model("center", centerSchema);

module.exports = { Center };
