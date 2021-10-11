import { BACKEND_ROUTE, BACKEND_URL } from "../../constants";
import { PokeListDto } from "../../dto";
import { axiosApi } from "../axios/axios.api"
import axios, { Axios, AxiosResponse } from "axios"
import { Pokemon } from "../../types/pokemon/pokemon.type";


type QueryPokemon = {
    offset: number,
    limit: number
}

const { POKEMON, POKEMON_NAME } = BACKEND_ROUTE;

const pokemonApi = () => {
    const instance = axiosApi(BACKEND_URL);

    const page = async (query: QueryPokemon): Promise<PokeListDto> => {
        const response: AxiosResponse<PokeListDto> = await instance.get(POKEMON, {
            params: {
                ...query
            }
        })
        return response.data;
    }

    const pokemonUrl = async (url: string): Promise<Pokemon> => {
        const response: AxiosResponse<Pokemon> = await axios.get(url);

        return response.data;
    }

    const pokemonName = async (name: string): Promise<Pokemon> => {
        const response: AxiosResponse<Pokemon> = await instance.get(POKEMON_NAME(name));

        return response.data
    }

    return {
        page,
        pokemonUrl,
        pokemonName
    }
}

export {
    pokemonApi
}