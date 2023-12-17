const pool = require('../../db')
const queries = require('./queries')

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

const getCharactersByElement = (req, res) => {
    const element = req.params.element;
    pool.query(queries.getCharactersByElement, [element], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getCharactersByPath = (req, res) => {
    const path = req.params.path;
    pool.query(queries.getCharactersByPath, [path], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getCharactersByRarity = (req, res) => {
    const param = req.params.rarity;
    const rarity = parseInt(param);

    if (isNaN(rarity)) {
        return res.status(400).json({ error: 'Invalid rarity parameter. Must be a valid integer.' });
    }

    pool.query(queries.getCharactersByRarity, [rarity], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getCharactersByDate = (req, res) => {
    pool.query(queries.getCharactersByDate, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports= {
    getCharacters,
    getCharacterById,
    getCharacterByName,
    getCharactersByElement,
    getCharactersByPath,
    getCharactersByRarity,
    getCharactersByDate,
    
};