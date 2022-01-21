module.exports = (sequelize, DataTypes) => {

    const Url = sequelize.define('Url', {
        OldUrl : {
            type : DataTypes.STRING,
            allowNull : false
        },

        NewUrl : {
            type : DataTypes.STRING,
            allowNull : false
        }
    });

    return Url;

};