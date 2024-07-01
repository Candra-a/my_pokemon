
const mongoose = require('mongoose')
const { Schema } = mongoose

const myPokemonSchema = new Schema({
  id: mongoose.Schema.ObjectId,
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String
  },
  url: {
    type: String,
    required: true
  },
  pokedex_id: {
    type: Number
  }
})
    
module.exports = mongoose.model('my_pokemon', myPokemonSchema)
