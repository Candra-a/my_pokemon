const express = require('express')
const router = express.Router()
const pokemonRouter = require('./pokemon')

router.use('/pokemon', pokemonRouter)

module.exports = router