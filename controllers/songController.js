const { Song } = require("../models");

exports.createSong = async (req, res) => {
  try {
    const body = req.body;
    const result = await new Song(body).save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

exports.getSongs = async (req, res) => {
  try {
    const result = await Song.find({}).populate("artist");
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
exports.getSong = async (req, res) => {
  try {
    const Id = req.params.id;
    const result = await Song.findById(Id).populate("artist");
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
