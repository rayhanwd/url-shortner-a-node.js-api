const Url = require("./url.model");

const createSortUrl = async (data) => {
  const url = new Url({
    longUrl: data,
  });
  const sorturl = url.save();
  return sorturl;
};

const getOrignalUrl = async (shortId) => {
  const url = await Url.findOne({ shortId: shortId });
  return url;
}

module.exports = {
  createSortUrl,
  getOrignalUrl,
};
