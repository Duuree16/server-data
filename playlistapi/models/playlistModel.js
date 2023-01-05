const { Schema, model, Types } = require("mongoose");

const playlistSchema = new Schema({
  title: String,
  description: String,
  CreatorName: String,
  creator: Types.ObjectId,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: Date,
  isPrivate: Boolean,
  songs: [{ type: Schema.Types.ObjectId, ref: "songs" }],
});

const Playlist = model("list", playlistSchema);

module.exports = Playlist;
