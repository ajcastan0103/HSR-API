const getCharacters = "SELECT * FROM characters ORDER BY id";
const getCharacterById = "SELECT * FROM characters WHERE id = $1";
const getCharacterByName = "SELECT * FROM characters WHERE name ILIKE $1";

module.exports = {
    getCharacters,
    getCharacterById,
    getCharacterByName,

};