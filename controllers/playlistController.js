const { Playlist } = require("../models");

exports.createPlaylist = async (req, res) => {
  const body = req.body;
  const result = await new Playlist(body).save();
  res.send(result);
};

exports.getPlaylists = async (req, res) => {
  const result = await Playlist.find({});
  res.send(result);
};

exports.getPlaylist = async (req, res) => {
  const result = await Playlist.findById(req.params.id).populate({
    path: "songs",
    populate: {
      path: "artist",
    },
  });

  res.send(result);
};

exports.addToPlaylist = async (req, res) => {
  const PLaylistId = req.query.playlistId;
  const songId = req.params.id;
  const playlist = await Playlist.findById(PLaylistId);
  playlist.songs.push(songId);
  await playlist.save();
  res.send(playlist);
};

exports.deletePlaylist = async (req, res) => {
  const result = await Playlist.findByIdAndDelete(req.params.id);
  res.send(result);
};
