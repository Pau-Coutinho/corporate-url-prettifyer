const buzzwords = require('./buzzwords.json');

const getRandomIndexFromArray = (array) => {
    /*esto es un array, levanto el tamanio y elijo un int entre 0 y el tamanio */
    return Math.floor(Math.random(0,array.length) * array.length);    
}


const generateCorporateSlug = () => {
    return Object.entries(buzzwords)
    .map((elem)=>elem[1][getRandomIndexFromArray(elem[1])])
    .join("-")
    .split(' ').join('_');
}

module.exports = generateCorporateSlug;
