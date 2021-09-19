import axios from 'axios'

const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

// En vue es comun que todo tenga una exportacion por defecto
export default pokemonApi