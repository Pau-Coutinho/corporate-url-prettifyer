const buzzwords = require('./buzzwords.json');

const getRandomIndexFromArray = (array) => {
    
    return Math.floor(Math.random(0,array.length) * array.length);    
}


const generateCorporateSlug = () => {
    return Object.entries(buzzwords)
    .map((elem)=>elem[1][getRandomIndexFromArray(elem[1])])
    .join("-")
    .split(' ').join('_');
}

module.exports = generateCorporateSlug;
