const mongoose = require("mongoose");

const Ucenici = mongoose.Schema({
  ime: {
    type: String,
    required: true,
  },
  prezime: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Ucenici", Ucenici);


