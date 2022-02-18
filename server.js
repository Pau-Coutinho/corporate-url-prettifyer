const express = require('express');
/*This probably should go on a separate file. I don't like it this way */
require('dotenv').config();
require('nunjucks');
const {sequelize} = require ("./models");
const generateCorporateSlug  = require("./lib/corporategenerator");
const app = new express();
const router = require("./routes");
const nunjucks = require('nunjucks');

nunjucks.configure("views", {
    autoescape : true,
    express : app
});



app.set("view engine","njk");
app.use(router);
app.router = router;
app.use(express.static("public"));


/*
if(process.env.IS_TEST === "true" ) {
    sequelize.sync({force : true}).then(() => {
        console.log("tablas creadsa con exito");
    })
} */

console.log(process.env);

app.listen(3000,  () => {console.log("Server on");});