const experss = require("express");
const {
  createPlaylist,
  getPlaylist,
  addToPlaylist,
  getPlaylists,
  deletePlaylist,
} = require("../controllers/playlistController");

const router = experss.Router();

router
  .get("/lists", getPlaylists)
  .get("/list/:id", getPlaylist)
  .post("/lists", createPlaylist)
  .put("/list/:id", addToPlaylist)
  .delete("/list/:id", deletePlaylist);

exports.playlistroutes = router;
