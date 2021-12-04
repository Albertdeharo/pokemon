export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
        
    } catch(err) {

    }
}

export const getPokemons = async (limit=25, offset=0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
        
    } catch(err) {

    }
}

export const getPokemonData = async (url) => {
    try {
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data, 'dataaaaaaaaaaaaaaa')
        return data;
        
    } catch(err) {

    }
}