const { Router } = require('express');
const controller = require('./controller');

const router= Router();

router.get('/rarity/:rarity', controller.getCharactersByRarity);
router.get('/element/:element', controller.getCharactersByElement);
router.get('/path/:path', controller.getCharactersByPath);
router.get('/date', controller.getCharactersByDate);
router.get('/:id', controller.getCharacterById);
router.get('/:name', controller.getCharacterByName);
router.get('/', controller.getCharacters);

module.exports=router;