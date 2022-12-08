const urlServices = require("./url.service");

const generateShortUrl = async (req, res) => {
  try {
    const shortUrl = await urlServices.createSortUrl(req.body.longUrl);
    res.status(201).json({
      message: "url shorted successfully!",
      shortUrl: `https://${req.headers.host}/${shortUrl.shortId}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getOrignalUrl = async (req, res) => {
  try {
    const url = await urlServices.getOrignalUrl(req.params.shortId);
    if (!url) {
      return res.status(404).json({ message: "URL not found" });
    }
    res.redirect(url.longUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  generateShortUrl,
  getOrignalUrl,
};
