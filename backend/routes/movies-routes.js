const { Router } = require("express");
const router = new Router();

router.get("/", require("../controllers/movies-controller/getAllMovies"));
router.post("/add", require("../controllers/movies-controller/addMovie"));

module.exports = router;
