const { Playlist } = require("../models");

const createPlaylist = async (req, res) => {
  try {
    const body = req.body;
    const result = await new Playlist(body).save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
const getPlaylists = async (req, res) => {
  try {
    const result = await Playlist.find({});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
const getPlaylist = async (req, res) => {
  try {
    const result = await Playlist.findById(req.params.id).populate({
      path: "songs",
      populate: {
        path: "artist",
      },
    });

    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const addToPlaylist = async (req, res) => {
  try {
    const PLaylistId = req.query.playlistId;
    const songId = req.params.id;
    const playlist = await Playlist.findById(PLaylistId);
    playlist.songs.push(songId);
    await playlist.save();
    res.send(playlist);
  } catch (err) {
    console.log(err);
  }
};

const deletePlaylist = async (req, res) => {
  try {
    const result = await Playlist.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createPlaylist,
  deletePlaylist,
  getPlaylist,
  getPlaylists,
  addToPlaylist,
};
