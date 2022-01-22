const express = require("express");
;
const urlController = require('./controllers/url.controller');
const router = express.Router();

//

//this should be a get variable
router.get("/", (req, res)=> {
    res.render("home", {title : "template engine title"});
});

router.get("/new/:oldUrl", urlController.create);
router.get("/l/:url", urlController.getUrl);

module.exports = router;