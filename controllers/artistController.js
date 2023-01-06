const { Artist } = require("../models");

const createArtist = async (req, res) => {
  const body = req.body;
  try {
    const result = await new Artist(body).save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const getArtist = async (req, res) => {
  const playlistId = req.params.playlistId;
  try {
    const result = await Artist.find({ playlistId });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
const getArtists = async (_req, res) => {
  try {
    const result = await Artist.find({});
    res.send(result);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getArtist, getArtists, createArtist };
