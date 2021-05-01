const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const queueSchema = new Schema({
  name: String,
  limit: { type: Number, default: 15 },
  line: [
    {
      user: { type: Schema.Types.ObjectId, ref: "user", autopopulate: true },
      entry_time: { type: Date, default: Date.now },
      estimated_time: { type: Date }, //for below 15 (time-this) for abv 15 (time)
    },
  ],
  time: Number, //in mins
});

queueSchema.plugin(require("mongoose-autopopulate"));
//create queue
//clear queue
//pause queue by some time
//delete queue

const Queue = mongoose.model("queue", queueSchema);

module.exports = { Queue };
