const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const queueSchema = new Schema({
  name: String,
  limit: { type: Number, default: 15 },
  line: [
    {
      user: { type: Schema.Types.ObjectId, ref: "user", autopopulate: true },
    },
  ],
  time: { type: Number, default: 5 }, //in mins
  n: { type: Number, default: 1 },
});

//queueSchema.plugin(require("mongoose-autopopulate"));

const Queue = mongoose.model("queue", queueSchema);

module.exports = { Queue };
