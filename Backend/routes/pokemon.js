const express = require('express')
const router = express.Router()
const pokemonController = require('../controllers/pokemon')

router.post('/pokedex', pokemonController.pokedex)
router.post('/catch', pokemonController.catchPokemon)
router.post('/release', pokemonController.releasePokemon)
router.post('/rename', pokemonController.renamePokemon)

router.post('/add-my-pokemon', pokemonController.addMyPokemon)
router.get('/get-my-pokemon-list', pokemonController.getMyPokemonList)
router.get('/get-one-my-pokemon', pokemonController.getOneMyPokemon)

module.exports = router