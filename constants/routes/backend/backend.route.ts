const BACKEND_ROUTE = {
    POKEMON: 'pokemon',
    POKEMON_NAME: (name: string) => `pokemon/${name}`
}

const BACKEND_URL = "https://pokeapi.co/api/v2/";

export {
    BACKEND_ROUTE,
    BACKEND_URL
}