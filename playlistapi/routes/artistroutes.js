const experss = require("express");
const {
  createArtist,
  getArtist,
  getArtists,
} = require("../controllers/artistController");

const router = experss.Router();

router
  .get("/artist/:id", getArtist)
  .get("/artists", getArtists)
  .post("/artists", createArtist)
  .put("/artist/:id", () => {})
  .delete("/artist/id", () => {});

exports.artistroutes = router;
