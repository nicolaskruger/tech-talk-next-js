import { pokemonApi } from "../../api"
import { PokeListDto, PokemonDto } from "../../dto";
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

const getPokemonDto = async (): Promise<PokemonDto[]> => {
    const pokeApi = pokemonApi();

    return (await pokeApi.page({
        limit: 10,
        offset: 0
    })).results;
}

const getPokemonByName = async (name: string): Promise<Pokemon> => {

    const pokeApi = pokemonApi();

    return await pokeApi.pokemonName(name)
}

export {
    getPokemons,
    getPokemonDto,
    getPokemonByName
}