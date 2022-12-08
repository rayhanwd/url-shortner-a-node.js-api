const mongoose = require("mongoose");
const shortid = require("shortid");

const urlSchema = mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortId: {
    type: String,
    required: true,
    default: shortid.generate,
  },
});

const url = mongoose.model("url", urlSchema);

module.exports = url;
