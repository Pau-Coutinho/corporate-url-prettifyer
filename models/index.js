const {Sequelize, Model, DataTypes} = require ("sequelize");

const sequelize = new Sequelize(
        {
        storage : process.env.DB_STORAGE,
        dialect : process.env.DB_CONNECTION,
        logging : false,
    }
);


const db = {}
db.Url = require("./Url") (sequelize, DataTypes);
/*Now it's time to define the models */
//const Op = sequelize.Op;
module.exports = {
    sequelize,
    db
    //todo: the models
}