'use strict'
const fetch = require("node-fetch");
const pokemones = async () => {
    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await respuesta.json()
        console.log(data.results);
    } catch (error) {
        console.log(error);
    }
}
pokemones();