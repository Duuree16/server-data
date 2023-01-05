const { Schema, model, Types } = require("mongoose");

const songSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "artists",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  url: String,
});

const Song = model("songs", songSchema);

module.exports = Song;
