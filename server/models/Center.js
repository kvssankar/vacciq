const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const centerSchema = new Schema({
  dp: {
    type: String,
    default:
      "https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg",
  },
  password: { type: String, required: true },
  address: { type: String },
  phone: { type: Number },
  queue_no: [{ type: Schema.Types.ObjectId, ref: "user", autopopulate: true }],
  esitimated_time: { type: String },
});

centerSchema.plugin(require("mongoose-autopopulate"));
const Center = mongoose.model("center", centerSchema);

module.exports = { Center };
