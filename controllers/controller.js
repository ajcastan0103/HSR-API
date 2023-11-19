const pool = require('../db')
const queries = require('../src/characters/queries')

const getCharacters = (req, res) => {
    pool.query(queries.getCharacters,(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getCharacterById = (req, res) => {
    const param = req.params.id;
    const id = parseInt(param);

    if (isNaN(id)) {
        pool.query(queries.getCharacterByName, [param], (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
        });
    } else {
        pool.query(queries.getCharacterById, [id], (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
        });
    }
};

const getCharacterByName = (req, res) => {
    const name = req.params.name;
    pool.query(queries.getCharacterByName,[name], (error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports= {
    getCharacters,
    getCharacterById,
    getCharacterByName,
};