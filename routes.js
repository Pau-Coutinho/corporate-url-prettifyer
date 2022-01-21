const express = require("express");
;
const urlController = require('./controllers/url.controller');
const router = express.Router();

//

//this should be a get variable
router.get("/", (req, res)=> {res.send(("asd"))});

router.get("/new/:oldUrl", urlController.create);
router.get("/l/:url", urlController.getUrl);

module.exports = router;