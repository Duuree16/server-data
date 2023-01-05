const experss = require("express");
const {
  createSong,
  getSongs,
  getSong,
} = require("../controllers/songController");

const router = experss.Router();

router
  .get("/songs", getSongs)
  .post("/songs", createSong)
  .get("/song/:id", getSong)
  .delete("/song/id", () => {});

exports.songroutes = router;
