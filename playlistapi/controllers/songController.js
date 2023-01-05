const { Song } = require("../models");

exports.createSong = async (req, res) => {
  const body = req.body;
  const result = await new Song(body).save();
  res.send(result);
};

exports.getSongs = async (req, res) => {
  const result = await Song.find({}).populate("artist");
  res.send(result);
};
exports.getSong = async (req, res) => {
  const Id = req.params.id;
  const result = await Song.findById(Id).populate("artist");
  res.send(result);
};
