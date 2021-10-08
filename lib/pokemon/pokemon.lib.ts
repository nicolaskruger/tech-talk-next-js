import { pokemonApi } from "../../api"
import { Pokemon } from "../../types/pokemon/pokemon.type"

const getPokemons = async (): Promise<Pokemon[]> => {
    const pokeApi = pokemonApi();

    const pokeList = pokeApi.page({
        limit: 10,
        offset: 0
    })

    const pokemons = (await pokeList).results.map(async (poke) => {
        return pokeApi.pokemonUrl(poke.url);
    })

    return Promise.all(pokemons);

}
export {
    getPokemons
}