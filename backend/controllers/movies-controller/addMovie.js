const movieModel = require("../../models/movieModel");

const addMovie = (req, res) => {
  let reqBody = req.body;

  try {
    let newMovie = new movieModel({ ...reqBody });
    newMovie.save();
  } catch (error) {
    console.log(error);
  }
};

module.exports = addMovie;
