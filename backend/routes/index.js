const express = require("express");
const router = new express.Router();

router.use("/movies", require("./movies-routes"));

module.exports = router;
