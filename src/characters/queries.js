const getCharacters = "SELECT * FROM characters ORDER BY id";
const getCharacterById = "SELECT * FROM characters WHERE id = $1";
const getCharacterByName = "SELECT * FROM characters WHERE name ILIKE $1";
const getCharactersByElement = "SELECT * FROM characters WHERE element ILIKE $1";
const getCharactersByPath = "SELECT * FROM characters WHERE path ILIKE $1";
const getCharactersByRarity = "SELECT * FROM characters WHERE rarity = $1";
const getCharactersByDate = "SELECT * FROM characters ORDER BY release";

module.exports = {
    getCharacters,
    getCharacterById,
    getCharacterByName,
    getCharactersByElement,
    getCharactersByPath,
    getCharactersByRarity,
    getCharactersByDate,

};