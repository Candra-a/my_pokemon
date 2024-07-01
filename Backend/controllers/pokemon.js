const axios = require('axios');
const my_pokemon = require('../models/my_pokemon')

// Basic API endpoint
let pokemon_url = 'https://pokeapi.co/api/v2';

exports.pokedex = async (req, res) => {
    try {
        if(req.body.url) {
            pokemon_url = req.body.url
        }
        
        const response = await axios({method: "get", url: `${pokemon_url}/pokemon`});
        res.json(response.data);
    } catch (error) {
        throw new Error(`Error fetching jobs: ${error.message}`);
    }
}

exports.catchPokemon = async (req, res) => {
    try {
        const response = await axios({method: "get", url: req.body.url});
        const randomNumber = Math.random();
        
        const roundedNumber = 0.1 + Math.round(randomNumber * 10) / 10;
        console.log(roundedNumber)
        if (roundedNumber < 0.5) {
            res.json({
                message: "success"
            })
            return
        } else {
            res.json({
                message: "failed"
            })
        }
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

exports.releasePokemon = async (req, res) => {
    try{
        const number = Math.floor(Math.random() * (20 - 1 + 1)) + 1
        console.log(number)
        let prime = 1
    
        if(number % 2 !== 0) {
            console.log('check prime')
            for (let i = 3; i <= Math.sqrt(number); i += 2) {
                if (number % i === 0) {
                    prime = 0;
                    break
                }
            }
            console.log(prime)
        } else {
            prime = 0
        }
    
        if(prime === 1) {
            res.json({
                message: "Release pokemon success"
            })
    
            const deletePokemon = my_pokemon.deleteOne({pokedex_id: req.body.pokedex_id})
            return
        }
    
        res.json({
            message: "Release pokemon failed"
        })
    }catch (error) {
        res.json({
            message: error.message
        })
    }
}

exports.renamePokemon = async (req, res) => {
    try{
        const response = await axios({method: "get", url: req.body.url});

        const renamePokemon = await my_pokemon.updateOne({pokedex_id: response.data.id}, {nickname: req.body.nickname})
    
        res.json({
            message: "Rename pokemon success"
        })
    }catch (error) {
        res.json({
            message: error.message
        })
    }
}

exports.addMyPokemon = async (req, res) => {
    try{
        const response = await axios({method: "get", url: req.body.url});

        const data = {
            name: req.body.name,
            nickname: req.body.nickname,
            url: req.body.url,
            pokedex_id: response.data.id
        }
        const addMyPokemon = my_pokemon.create(data)
    
        res.json({
            data: addMyPokemon,
            message: "Pokemon added successfully"
        })
    }catch (error) {
        res.json({
            message: error.message
        })
    }
}

exports.getMyPokemonList = async (req, res) => {
    try{
        const getPokemon = await my_pokemon.find()
    
        res.json({
            data: getPokemon
        })
    }catch (error) {
        res.json({
            message: error.message
        })
    }
}

exports.getOneMyPokemon = async (req, res) => {
    try{
        const getPokemon = await my_pokemon.findOne({pokedex_id: req.body.pokedex_id})
    
        res.json({
            data: getPokemon
        })
    }catch (error) {
        res.json({
            message: error.message
        })
    }
}