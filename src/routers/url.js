const router = require("express").Router();
const urlController = require("../api/url/url.controller");

router
  .post("/shorten", urlController.generateShortUrl)
  .get("/:shortId", urlController.getOrignalUrl);

module.exports = router;
