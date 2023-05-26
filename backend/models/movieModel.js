const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  year: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  rate: {
    type: String,
    require: true,
  },
});

const movieModel = model("movies", movieSchema);

module.exports = movieModel;
