const { Router } = require('express');
const controller = require('./controller');

const router= Router();

router.get('/:id',controller.getCharacterById);
router.get('/:name',controller.getCharacterByName);
router.get('/',controller.getCharacters);

module.exports=router;