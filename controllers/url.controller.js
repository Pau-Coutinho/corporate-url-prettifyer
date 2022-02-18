const { db } = require('../models');
const { Op } = require('sequelize');
const isUrl = require('../lib/validator');
const generateCorporateSlug = require("../lib/corporategenerator");


const Url = db.Url;

const slugExists = async (slug) => {
    return (await db.Url.findOne({ where: { newUrl: slug } }) !== null);

}

const generateUniqueSlug = async () => {
    const slug = generateCorporateSlug(); 
    if (!await slugExists(slug)) {
        return slug
    }
    else return await generateUniqueSlug();
}



exports.create = async (req, res) => {
    if (process.env.IS_TEST) {
        console.log(req.params);

    }
    
    
    const newSlug = generateCorporateSlug();

    const creation = await db.Url.create({
        OldUrl: req.params.oldUrl,
        NewUrl: await generateUniqueSlug()
    }).catch((err) => {
        console.log("Se produjo un error");
        res.send(err);
    });

};

exports.getUrl =  async (req, res) => {
    if(process.env.IS_TEST) {
        console.log(req.params);
    }
    
    const resultSet = await db.Url.findOne({where : {newUrl : req.params.url}});
    if (resultSet === null) {res.send("URL NO ENCONTRADA")} //Change this to a error page
    else {
        console.log("Redireccionando hacia");
        res.redirect("http://"+ resultSet.OldUrl);
    }
}
